require('dotenv').config(); // Load environment variables

const express = require('express'); // Import the express library
const app = express(); // Create an express application
const expressLayouts = require('express-ejs-layouts');

const MongoStore = require("connect-mongo"); // Import the connect-mongo library
const methodOverride = require('method-override'); // Import the method-override library
const PORT = process.env.PORT || 4000; // Set the port to the value of process.env.PORT or 4000 if it is not defined
// express json and urlencoded
// Import the controllers
// const commentController = require('./src/controller/comments_controllers.js');
// const authController = require('./src/controller/auth_controllers.js');


const {Auth, Comments, Posts} = require("./src/routes")

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('layout', './layout/standard-layout')
app.use(expressLayouts);


// Middleware to set `res.locals.user` to `req.session.currentUser`
app.use(function (req, res, next) {
  res.locals.user = req.session.currentUser;
  next();
});

// Middleware to redirect to the login page if the user is not logged in
const authRequired = function (req, res, next) {
  if (req.session.currentUser) {
    return next();
  }

  return res.redirect("/login");
};

// Middleware to enable HTTP method override
app.use(methodOverride('_method'));

// Serve the public directory as static files
app.use(express.static('public'));

// Mount the controllers
app.use('/travelhub', authRequired, travelHubController);
app.use('/comment', commentController);
app.use("/", authController);
// Routes


app.get('/*', (req, res) => {
  res.render('404');
});

app.listen(PORT, () => {
  console.log(`Running on PORT: ${PORT}`);
});


