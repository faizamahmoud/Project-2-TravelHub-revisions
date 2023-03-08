const Post = require('../models/Post');
const Comment = require('../models/Comment');
const User = require('../models/User');

module.exports = {
    Auth: require("./authRoutes"),
    Comments: require("./commentRoutes")(Comment),
    Posts: require("./postRoutes")(Post),
};
