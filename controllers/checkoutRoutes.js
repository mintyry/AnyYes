const router = require('express').Router();
const { Order, Listing } = require('../models');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const withAuth = require('../utils/auth')

const YOUR_DOMAIN = 'http://localhost:3001';

router.get('/', async (req, res) => {
    try {
        const dbRes = await Listing.findOne({
            where: {
                title: req.query.name
            }
        });


        const listing = dbRes.get({ plain: true });

        // 4242424242424242 this is the card number to enter to test
        // an future date for exp date works
        // an 3 digit for cvc works
        // use any full name and zipcode
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price_data: {
                        currency: 'USD',

                        unit_amount: Math.round(listing.price * 100),
                        product_data: {
                            name: req.query.name,
                            description: listing.description,
                        }

                    },
                    quantity: 1
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/checkout/success?listing_id=${listing.id}`,
            cancel_url: `${YOUR_DOMAIN}/checkout/cancel`,
        });

        res.redirect(303, session.url);

    } catch (error) {
        res.status(400).json(error);
    }
});


router.get('/success', withAuth, async (req, res) => {
    const listing_id = req.query.listing_id
    const user_id = req.session.user_id
    try {
        const updateItem = await Listing.update({
            sold: true
        }, {
            where: {
                id: listing_id,

            }
        });
        const listing = await Listing.findOne({
            where: { id: listing_id },
        });

        const dbRes = await Order.create({
            user_id: user_id,
            listing_id: listing_id
        })

        const order = dbRes.get({ plain: true });
        console.log(listing)
        res.render('checkout', { order, listing, logged_in: req.session.logged_in });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'This cart does not exist.' });
    }
});

router.get('/cancel', async (req, res) => {
    try {
        res.render('cancelcheckout', { logged_in: req.session.logged_in });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'This cart does not exist.' });
    }
});



module.exports = router;