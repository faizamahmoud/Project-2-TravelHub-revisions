require("../config/db.connection")


module.exports ={
    Post: require("./Post"),
    Comment: require("./Comment"),
    User: require("./User"),
}


// mongoose.connect( process.env.MONGODB_URI)


module.exports = {
    Comment: require("./Comment"),
    User: require("./User"),
    Post: require('./Post'),
}

