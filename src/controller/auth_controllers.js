const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { User } = require("../models");



const renderLogin = async (req, res) => {
  try {
    const user = await User.findById(req.body.userId);
    return res.redirect('/')
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

const showRegistrationForm = async (req, res) => {
      return res.redirect("auth/register");
}

const registerUser = async (req, res) => {
  try {
    const foundUser = await User.exists({ email: req.body.email });
    if (foundUser) {
      return res.redirect("/login");
    }
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);

    req.body.password = hash;
    const newUser = await User.create(req.body);
    return res.redirect("/login");
  } catch (err) {
    console.log(err);
    return res.send(err);
  }
};

const validateLogin = async (req, res) => {
  try {
    let userInfo = req.body
    const foundUser = await User.findOne({ email: req.body.email });
    console.log(foundUser);
    if (!foundUser) return res.redirect("/register");
    const match = await bcrypt.compare(userInfo.password, foundUser.password);
    if (!match) return res.send("password invalid");
    req.session.currentUser = {
      id: foundUser._id,
      username: foundUser.username,
    };
    console.log(req.session.currentUser)
    return res.redirect("/travelhub");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

const logout = async (req, res) => {
  try {
    await req.session.destroy();
    return res.redirect("/login");
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
};

module.exports = {
  registerUser, renderLogin, showRegistrationForm, validateLogin, logout
};