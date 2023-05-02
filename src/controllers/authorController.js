const bookModel=require('../models/bookModel')
const authorModel=require('../models/authorModel')


const createAuthor =async function(req, res){
    let allAuthor= await authorModel.create(req.body)
    res.send({msg : allAuthor})
}

// const getbooks=async function(req,res){
//     let booklist=await bookModel.find().populate('authorPopulate')
//     res.send({msg :booklist})
// }


const listBooks=async function(req,res){
let collectId= await authorModel.findOne({author_name: "Chetan Bhagat"})
let allbooks=await bookModel.find()
let collectbooks=allbooks.filter(x=> x.author_id===collectId.author_id)

res.send({msg : collectbooks})
}

const updatePrice=async function(req, res){
const author=await bookModel.findOneAndUpdate(
    {name : "Two states"},
    {$set : {price: 100}},
    {new : true}
)
const authorName=await authorModel.find()
const ans=authorName.find(x=> x.author_id===author.author_id)
res.send({authordetails: ans.author_name, book : author})
}

const booksBetweenRange=async function(req, res){
    let aut=await authorModel.find()
    const bookArr=await bookModel.find( { price : { $gte: 50, $lte: 100} }).select({ author_id :1})
    const autname = bookArr.map(x=>{
    let ak=aut.find(y=> y.author_id===x.author_id)
    return ak.author_name
 })
 res.send({msg :autname})
}

module.exports.createAuthor=createAuthor
module.exports.listBooks=listBooks
module.exports.updatePrice=updatePrice
module.exports.booksBetweenRange=booksBetweenRange

//module.exports.getbooks=getbooks