

const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content: String,
    post: {type: mongoose.Types.ObjectId,ref: "Post"},
    user: {type: mongoose.Types.ObjectId,ref: "User"},
    
},
{timestamps: true},

);

const Comment = mongoose.model('ThComment',CommentSchema);

module.exports = Comment;

