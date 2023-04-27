const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")
const bookModel=require("../models/bookModel")
// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

const createBook=async function(req, res){
    let data=req.body
    let savedData=await bookModel.create(data)
    res.send({msg: savedData})
} 

const getBookList=async function(req, res){
    let allBooks=await bookModel.find()
    res.send({msg: allBooks})
}


// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createBook=createBook
module.exports.getBookList=getBookList