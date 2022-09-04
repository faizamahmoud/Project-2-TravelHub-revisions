//importing statements
const express = require('express') 
const session = require("express-session");
/* SECTION External modules */
const MongoStore = require("connect-mongo");
require('dotenv').config();


//CONTROLLER IMPORTS
const commentController = require('./controller/commentscontrollers.js')
const authController = require('./controller/authcontrollers.js')
const travelHubController = require("./controller/travelhubcontrollers");


const app = express()
const PORT = process.env.PORT || 4000
app.set('view engine', 'ejs')
// require("./config/db.connection");
// require('./models')

const methodOverride = require('method-override');




/* SECTION App Config */
// app.use(navLinks);
app.use(
    session({
        // where to store the sessions in mongodb
        store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
        // secret key is used to sign every cookie to say its is valid
        secret: "super secret",
        resave: false,
        saveUninitialized: false,
        // configure the experation of the cookie
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
       
        },
    })

    
);

// console.log(session);

/* SECTION Middleware */
app.use(function (req, res, next) {
    res.locals.user = req.session.currentUser;
    next();
  });

  const authRequired = function (req, res, next) {
    if (req.session.currentUser) {
      return next();
    }
  
    return res.redirect("/login");
  };

// MIDDLEWARE
app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use('/travelhub',authRequired,travelHubController );
app.use('/comment',commentController );
app.use("/", authController);







// 404 Wildcard Route
app.get('/*',(req,res)=>{
    res.render('404')
})


// Post.insertMany(Posts,(err, Posts)=>{
//     if (err){ console.log(err)}
//     console.log("added provided  data", Posts)
//     // mongoose.connection.close();
// });

app.listen(PORT);
