// const mongoose = require('mongoose');
// require('dotenv').config();
const express = require("express");
const router = express.Router();



//MIDDLEWARE
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// MODELS IMPORT
const db = require("../models");


//new route
router.get("/new", (req, res) => {
    res.render("new.ejs");
  });
  // create route 
router.post("/", async (req, res) => {
    const createdPost = req.body;
    // post.push(createdPost);
    try {
      const newPost = await db.ThPost.create(createdPost);
  
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
      const foundPost = await db.ThPost.findById(req.params.id);
      const foundComment = await db.ThComment.find({
        post: req.params.id,
      }).populate("user").exec() ;
      console.log(foundComment)
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
      const allPost = await db.ThPost.find();
      const context = { post: allPost };
      
      res.render("index.ejs", context);
    } catch (err) {
      console.log(err);
      res.redirect("/404");
    }
  });

  //delete route
  router.delete("/:id", async (req, res) => {
    try {
      const foundPost = await db.ThPost.findByIdAndDelete(
        req.params.id
      );
      // delete any reviews where the review's product matches the resource to delete
      const foundComment = await Th.deleteMany({
        product: req.params.id,
      });
      // console.log(foundPost,foundComment)
      return res.redirect("/travelhub");
    } catch (err) {
      // throw new Error(err)
      console.log(err);
      res.redirect("/404");
    }
  });

  // edit route
router.get("/:id/edit", async (req, res) => {
  
    try {
      const foundPost = await db.ThPost.findById(req.params.id);
      // console.log(foundPost)
      res.render("edit.ejs", { post: foundPost, id: foundPost._id });
    } catch (err) {
      //console.log(err);
      res.redirect("/404");
    }
  });

// update route 
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = req.body;
    await db.ThPost.findByIdAndUpdate(req.params.id, updatedPost, {
      new: true,
    });

    res.redirect(`/travelhub/${req.params.id}`);
  } catch (err) {
    console.log(err);
    res.redirect("/404");
  }
});


module.exports = router;