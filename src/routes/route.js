const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController");
const userModel = require('../models/userModel.js');
const bookModel=require('../models/bookModel.js')
const bookController=require('../controllers/bookController.js')
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)


router.post('/createBook', bookController.createBook)
// router.get('/getBookList',bookController.getBookList)
router.get('/getSelectedBookList',bookController.getSelectedBookList)
router.post('/getBooksInYear',bookController.getBooksInYear)
router.get('/getXINRBooks',bookController.getXINRBooks)
router.get('/getRandomBooks',bookController.getRandomBooks)
router.post('/getParticularBooks',bookController.getParticularBooks)
module.exports = router;

