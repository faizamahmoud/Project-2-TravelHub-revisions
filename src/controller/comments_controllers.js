``
const express = require("express");
const { ThPost } = require("../models");
const router = express.Router();



//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require('../models');


// index route
router.get("/", async (req, res) => {
  try {
    const allComments = await db.Comment.find().populate("comment user").exec();
    const allPosts = await db.Post.find();
    const context = { comments: allComments, posts: allPosts }
    res.render("comment/index", context);
  } catch(err) {
    console.log(err)
    next()
  }
})

// //show route
router.get('/:id/', async (req, res, next) => {
  try {
    const foundComment = await db.Comment.findById(req.params.id).populate('post').exec()
    res.render('comment/show.ejs', { comment: foundComment })
  } catch (err) {
    console.log(err)
    next()
  }
})



// create route 
router.post('/:id', async (req, res, next) => {
  try {
    const newComment = await db.Comment.create(req.body)
    const post = await db.Post.findById(newComment.post)
    post.comment.push(newComment.id)
    await post.save()
    res.redirect(`/travelhub/${newComment.post}`)
  } catch (err) {
    console.log(err)
    next()
  }

})

// update route
router.put('/:id', async (req, res, next) => {
  try {
    const updatedComment = await db.Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.redirect(`/travelhub/${updatedComment.post}`)
  } catch (err) {
    next()
  }

})



module.exports = router;