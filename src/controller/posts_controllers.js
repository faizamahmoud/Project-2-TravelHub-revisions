
require('dotenv').config();
const express = require("express");
const router = express.Router();



//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");



//new route
router.get("/new", (req, res) => {
  res.render("new.ejs", { title: 'New Post' });
});

// create route 
router.post("/", async (req, res) => {
  const createdPost = req.body;
  // post.push(createdPost);
  try {
    const newPost = await db.Post.create(createdPost);

    // console.log(newPost);

    res.redirect(`/travelhub`);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
    // throw new Error(err);
  }
});
//show route
router.get("/:id", async (req, res) => {
  try {
    const foundPost = await db.Post.findById(req.params.id);
    const foundComment = await db.Comment.find({
      post: req.params.id,
    }).populate("user").exec();

    res.render("show.ejs", {
      post: foundPost,
      id: foundPost._id,
      comment: foundComment,
    });
  } catch (err) {
    //console.log(err);
    res.redirect("/404");
  }
});

// index route - homepage
router.get("/", async (req, res) => {
  try {
    const allPost = await db.Post.find();
    const context = { post: allPost };

    res.render("index.ejs", { title: 'Home Page', post: allPost });
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});
// app.get('', (req, res) => {
//   res.render('index', { title: 'Home Page'})
// })

//delete route
router.delete("/:id", async (req, res) => {
  try {
    const foundPost = await db.Post.findByIdAndDelete(
      req.params.id
    );
    const foundComment = await db.Comment.deleteMany({
      product: req.params.id,
    });
    return res.redirect("/travelhub");
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});

// edit route
router.get("/:id/edit", async (req, res) => {

  try {
    const foundPost = await db.Post.findById(req.params.id);
    res.render("edit.ejs", { post: foundPost, id: foundPost._id });
  } catch (err) {
    res.redirect("/404");
  }
});

// update route 
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = req.body;
    await db.Post.findByIdAndUpdate(req.params.id, updatedPost, {
      new: true,
    });

    res.redirect(`/travelhub/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});


module.exports = router;