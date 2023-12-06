//this doesnt seem to work
// this is supposed to redirect the user to login page once their cookie expires, it is called inside of server.js
module.exports = (req, res, next) => {
    console.log("Session ID:", req.session.id);
    console.log("Session Expiry:", req.session.cookie.expires);
    // Check if the session cookie exists and if it's expired
    if (req.session && req.session.cookie && req.session.cookie.expires < Date.now()) {
      // Session expired, redirect to login page
      console.log("Redirecting to login...");
      return res.redirect('/login');
    }
    // Continue to the next middleware
    next();
  };