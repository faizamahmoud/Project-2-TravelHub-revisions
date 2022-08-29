//importing statements
const express = require('express') 
const methodOverride = require('method-override');

const app = express()
const PORT = 4000
app.set('view engine', 'ejs')
require("./config/db.connection");
const Post =require('./models/THPost')
const Posts = require('./models/travelHub_model');

//CONTROLLER IMPORTS
const travelHubController = require('./controller/travelHub_controllers.js');



// MIDDLEWARE
app.use(methodOverride('_method'));
app.use('/travelhub',travelHubController )





/*Post.insertMany(Posts,(err, Posts)=>{
    if (err){ console.log(err)}
    console.log("added provided  data", Posts)
    mongoose.connection.close();
});*/






app.listen(4000, () => console.log('starting server at port:', PORT))