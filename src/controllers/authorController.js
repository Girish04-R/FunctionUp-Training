const bookModel=require('../models/bookModel')
const authorModel=require('../models/authorModel')


const createAuthor =async function(req, res){
    let allAuthor= await authorModel.create(req.body)
    res.send({msg : allAuthor})
}


const getbooks=async function(req,res){
    let alldata=await bookModel.find().populate('author')
    console.log(alldata)
    res.send(alldata)
}

// const bookList=async function(req,res){
//     let aut=await bookModel.find({author_name:"Chetan Bhagat"}).populate('author')
//     res.send({msg:aut})

// }

const priceUpdate=async function(req,res){
    let auth=await bookModel.findOneAndUpdate({name: "Two states"},{$set:{price:100}},{new : true}).populate('author')
    res.send({msg:auth})
}

const bkBetRange=async function(req,res){
    let auth=await bookModel.find( { price : { $gte: 50, $lte: 100} } ).select({ author_id :1,author_name:1}).populate('author')
//console.log(auth.author_name)
   // let ans=auth.map(x=> x.author.author_name)
    res.send({msg:auth})
}
// const listBooks=async function(req,res){
// let collectId= await authorModel.findOne({author_name: "Chetan Bhagat"})
// let allbooks=await bookModel.find()
// let collectbooks=allbooks.filter(x=> x.author_id===collectId.author_id)

// res.send({msg : collectbooks})
// }

// const updatePrice=async function(req, res){
// const author=await bookModel.findOneAndUpdate(
//     {name : "Two states"},
//     {$set : {price: 100}},
//     {new : true}
// )
// const authorName=await authorModel.find()
// const ans=authorName.find(x=> x.author_id===author.author_id)
// res.send({authordetails: ans.author_name, book : author})
// }

// const booksBetweenRange=async function(req, res){
// const bookArr=await bookModel.find( { price : { $gte: 50, $lte: 100} }).select({ author_id :1})
//  const ans = await authorModel.find()
//  const finalans=ans.map(x=> x.author_id===bookArr.author_id)
// res.send({msg: finalans})
// }

module.exports.createAuthor=createAuthor
module.exports.getbooks=getbooks
// module.exports.listBooks=listBooks
// module.exports.updatePrice=updatePrice
// module.exports.booksBetweenRange=booksBetweenRange
//module.exports.bookList=bookList
module.exports.priceUpdate=priceUpdate
module.exports.bkBetRange=bkBetRange