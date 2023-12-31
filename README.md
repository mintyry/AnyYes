
# AnyYes


## Description 📰

AnyYes is a Customer-to-Customer (C2C) retro-gaming e-commerce application. Although the primary motivator to make this app was to put our knowledge of front and back-end software development to work, this specific idea originated from collaborator Sal, who pointed out that there isn't an e-commerce app in the retro-gaming sector, so we decided to make one dedicated to that niche, also building on the C2C aspect of it, allowing users of the site to both buy AND sell retro games and consoles. This solves the problem for the retro-gaming demographic/audience; whereas they once did not have a dedicated or streamlined channel to buy these products, AnyYes provides them that opportunity.  
In building this application, we learned many things, notably: how to implement Stripe to process payments, how to implement multer to allow users to upload photos of their products, more knowledge on Bulma CSS, and a new CSS framework to utilize image carousels via Splidejs. Beyond just these libraries, we also got to put into real practice, the solid foundation and flow to connect back and front-end together utilizing Sequelize and Handlebars.

## Table of Contents

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Installation](#Installation)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Usage](#Usage)


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Contributing](#Contributing)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Deployed-Link](#Deployed-Application)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Credits](#Credits)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ➣ [Questions](#Questions)


<a id="Installation"></a>
## Installation 🔌

In order to install, please run `npm i`.


<a id="Usage"></a>
## Usage 🧮

In order to use this app, please run `npm start`.
If you would like to pre-seed the application with sample content, please run `npm run seed`.

Upon landing on the homepage of AnyYes, the user will be presented with the navigation bar with options to view all listings available for games and consoles, as well as the option to log in, along with an aesthetically-pleasing image-carousel of video-game pixel art.  
![AnyYes homepage](./public/photos/AY-home.png)

Demonstrating our site's responsiveness, in mobile view, upon scrolling down a bit, the user will see the three latest listings that were created by users, as well as all the other listings that came before.  
![AnyYes mobile three recent listings](./public/photos/AY-listings.png)
![AnyYes all listings](./public/photos/AY-fulllistings.png)

The user can also search for any listings via a keyword:  
![AnyYes search](./public/photos/AY-searchbar.png)
![AnyYes search results](./public/photos/AY_searchresults.png)

Upon viewing any single listing, the user can see key details about the product and can add the item to their cart.  
![AnyYes add to cart](./public/photos/AY-individual-addcart.png)


However, to assume full capabilities of the site, like actually viewing one's cart and making purchases or listings, all one has to do is sign up or log in, done via our login modal.  
![AnyYes modal for logging in or signing up](./public/photos/AY-login.png)

From log in, the user will be redirected to their profile page, where they are greeted personally, can see any listings they made and any orders for any purchases they've made, as well as the option to create a listing to sell something of theirs!  
![Profile page to see user's listings and orders](./public/photos/AY_profile.png)  
![Make a listing from profile page](./public/photos/AY_addlisting.png)  

Shopping is made easy! Click add to cart, view your cart, and click checkout to make a payment!
Once payment is made, the user will be redirected to the orders section in their profile page.  
![User's cart](./public/photos/AY_cart.png)  
![Pay via Stripe](./public/photos/AY-stripe.png)  

Please enjoy AnyYes!


<a id="Contributing"></a>
## Contributing 🍴

In order to contribute, one must fork their repository and create a pull request.


<a id="Deployed-Application"></a>
## Deployed Application 📲
Please enjoy your experience at [AnyYes](https://anyyes-3bf9b8d1cf29.herokuapp.com/)!

<a id="Credits"></a>
## Credits - 🤝
D. Murphy, M. Meyers, Xpert AI, Stack Overflow

Carousel art:

[https://wall.alphacoders.com/big.php?i=1298880](https://wall.alphacoders.com/big.php?i=1298880)

[https://www.deviantart.com/1tzah/art/Zelda-fanart-Itzah-905057250](https://www.deviantart.com/1tzah/art/Zelda-fanart-Itzah-905057250)

[https://wall.alphacoders.com/big.php?i=1281520](https://wall.alphacoders.com/big.php?i=1281520)

[https://wall.alphacoders.com/big.php?i=1259209](https://wall.alphacoders.com/big.php?i=1259209)

[https://wall.alphacoders.com/big.php?i=1129294](https://wall.alphacoders.com/big.php?i=1129294)

<a id="Questions"></a>
## Questions 📭

Feel Free to contact the creators at:

- [mintyry](https://github.com/mintyry)
- [ptoum21](https://github.com/ptoum21)
- [SalGonzalez151](https://github.com/SalGonzalez151)
- [pashag123](https://github.com/pashag123)
