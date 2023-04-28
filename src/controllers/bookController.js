
const bookModel=require("../models/bookModel")

// 1st wrk
const createBook=async function(req, res){
    let data=req.body
    let savedData=await bookModel.create(data)
    res.send({msg: savedData})
} 

// const getBookList=async function(req, res){
//     let allBooks=await bookModel.find()
//     res.send({msg: allBooks})
// }
// 2nd wrk
const getSelectedBookList= async function(req, res){
    let allbk=await bookModel.find().select({bookName: 1,authorName:1})
    res.send({msg : allbk})
}

// 3rd wrk

const getBooksInYear=async function(req, res){
let yr=req.body.year
let bookListYear=await bookModel.find({year: yr})
res.send(bookListYear)
}

const getParticularBooks=async function(req,res){
    let objdata=req.body
   let ans=await bookModel.find(objdata)
    res.send(ans)
}


const getXINRBooks=async function(req,res){
    let getPrice = await bookModel.find( {  "price.indianPrice":  { $in: [ '100', '200', '500' ] }  } )
    res.send(getPrice)
}

// 6th wrk
const getRandomBooks =async function(req,res){
let booklst=await bookModel.find({$or:[{stockAvailable: true},{totalPages:{$gt:500}}]})
res.send(booklst)
}

// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData
module.exports.createBook=createBook
//module.exports.getBookList=getBookList
module.exports.getSelectedBookList=getSelectedBookList
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getRandomBooks=getRandomBooks