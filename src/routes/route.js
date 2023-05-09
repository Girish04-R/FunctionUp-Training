const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middMW=require('../middleware/auth')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser )

router.post("/login", userController.LoginUser)

router.get('/getuserData/:userid',middMW.validUser,userController.getuserData)
router.put('/updateuserData/:userid',middMW.validUser,userController.updateuserData)
router.put('/deleteUserData/:userid',middMW.validUser,userController.deleteUserData)
//The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;