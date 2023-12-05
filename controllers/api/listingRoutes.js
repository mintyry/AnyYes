const router = require('express').Router();
const { Listing } = require('../../models');
const multer = require('multer');

//multer setup
const storage = multer.memoryStorage();
const upload = multer({
    storage,
})

//multer route
router.post('/file-upload', upload.single('image'), async (req, res) => {
    try {
        const fileBuffer = req.file.buffer;
        const {
            title,
            price,
            description,
            date_created,
            game_name,
            console_name,
            console_brand,
            year,
            condition,
            color,
            is_special_edition,
            category_id,
            user_id
        } = req.body;

        console.log(title, console_brand);

        const newListing = await Listing.create({
            title,
            image: fileBuffer,
            price,
            description,
            date_created,
            game_name,
            console_name,
            console_brand,
            year,
            condition,
            color,
            is_special_edition,
            category_id,
            user_id: req.session.user_id
        });

        res.status(200).json({ listing: newListing });
        res.end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});


// i dont think we need this route anymore
router.get('/:id', async (req, res) => {
    try {
        const listingId = req.params.id;
        console.log('this is what im logging' + listingId)

        // Assuming you have a method like 'findByPk' on your Listing model
        const foundListing = await Listing.findByPk(listingId);

        if (!foundListing) {
            return res.status(404).json({ message: 'Listing not found' });
        }

        // Send the image buffer along with other listing details
        res.status(200).json({
            listing: {
                id: foundListing.id,
                title: foundListing.title,
                price: foundListing.price,
                description: foundListing.description,
                date_created: foundListing.date_created,
                game_name: foundListing.game_name,
                console_name: foundListing.console_name,
                console_brand: foundListing.console_brand,
                year: foundListing.year,
                condition: foundListing.condition,
                color: foundListing.color,
                is_special_edition: foundListing.is_special_edition,
                category_id: foundListing.category_id,
                user_id: foundListing.user_id,
                image: foundListing.image ? foundListing.image.toString('base64') : null
            }

        });

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});


// posts the listing
router.post('/', async (req, res) => {
    try {
        const listingData = await Listing.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(listingData);
    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
})

router.get('/', async (req, res) => {
    try {
       
        const allListings = await Listing.findAll();

        const formattedListings = allListings.map(listing => ({
            id: listing.id,
            title: listing.title,
            price: listing.price,
            description: listing.description,
            date_created: listing.date_created,
            game_name: listing.game_name,
            console_name: listing.console_name,
            console_brand: listing.console_brand,
            year: listing.year,
            condition: listing.condition,
            color: listing.color,
            is_special_edition: listing.is_special_edition,
            category_id: listing.category_id,
            user_id: listing.user_id,
            image: listing.image ? listing.image.toString('base64') : null
        }));

        res.status(200).json({ listings: formattedListings });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
});





module.exports = router;