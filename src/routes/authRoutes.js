const express = require("express");
const router = express.Router();
const authController = require('../controller/auth_controllers')


router.get("/login", authController.renderLogin)

router.get("/register", authController.showRegistrationForm)

router.post("/register", authController.registerUser)

router.post("/login", authController.validateLogin)

router.get("/logout",authController.logout)

module.exports = router;