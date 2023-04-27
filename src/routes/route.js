const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');
const bookModel=require('../models/bookModel.js')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


router.post('/createBook', UserController.createBook)
router.get('/getBookList',UserController.getBookList)
module.exports = router;