const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    body: String,
    comment: [{type: mongoose.Types.ObjectId,ref: "Comment"}],
    date: {type: Date, default:Date.now},
    image: {type: String, default: null},
},

{timestamps: true},

);

const Post = mongoose.model('Post',PostSchema);

module.exports = Post;

