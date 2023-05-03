const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")
const ObjectId=require('mongoose').Schema.Types.ObjectId
const mongoose=require('mongoose')
// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     res.send({data: bookCreated})
// }

// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})

// }

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

/*3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
In this api, you have to write a logic that validates the following :
The authorId is present in the request body. If absent send an error message that this detail is required
If present, make sure the authorId is a valid ObjectId in the author collection. A valid ObjectId in author collection means that a document must exist with this id. If not then send an error message that the author is not present.
The publisherId is present in the request body. If absent send an error message that this detail is required
If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.
4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 
*/

const createBook = async function(req,res){
    let data = req.body
    if(mongoose.isValidObjectId(data.publisher) && mongoose.isValidObjectId(data.author)){
        if(await authorModel.findById(data.author) && await publisherModel.findById(data.publisher)){
        let CreatedBook  = await bookModel.create(req.body)
        return res.send({book :CreatedBook})
        }
        else{
           return res.send("Author/publisher is not Present")
        }
    }
    else{
        return res.send("error find in Book data")
    }

 }

/*List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one after another- first query will find the author_id for "Chetan Bhagat”. Then next query will get the list of books with that author_id )
*/

const getAuthorNameBook = async function(req,res){
    const allBooks = (await bookModel.find().populate('author').populate('publisher')).filter(x=>x.author.authorName = "Chetan Bhagat")
    res.send({data: allBooks})
}

/*find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response.  ( This will also need 2  queries- 1st will be a findOneAndUpdate. The second will be a find query with author_id from previous query)
*/

const getFilterUpdateBook = async function(req,res){
    const allAuthor = await bookModel.findOneAndUpdate(
        {bookName : "Two states"},
        {$set : {price : 100}},
        {new : true}
    ).populate('author').populate('publisher')

    res.send({allData : allAuthor})
}

/* a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.
 b) For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60)
*/

// const hardCoverStatus = async function(req,res){
//     const array = await bookModel.updateMany(
//         { publisher_id: {name :  {$in: ['Saraswati House'] } }},
//         { isHardCover: true },
//         {new:true}
//       );
       
//         return res.send({msg : array})
//       }
const  hardCoverStatus= async(req,res)=>{
    let data= await bookModel.find().populate("publisher");
    let c= data.filter(e=>e.publisher.name=='HarperCollins'||e.publisher.name =="Penguin")
    // console.log(c)
    let ar=[]
     for (let index = 0; index < c.length; index++) {
        const id=c[index]._id
        let d=await bookModel.findByIdAndUpdate(id,{$set:{isHardCover:true}},{new:true})
        ar.push(d)
     }
     res.send({msg:ar})
    // let data=await newBook.updateMany(
    //     {publisher_id:{name:"HarperColli
    }

    //   const updateRating=async(req,res)=>{
  
    //     const data =  await bookModel.updateMany(
    //       // { "author_id.rating": { $gt: 3.5 } },
    //       {author_id:{rating:{$gt:3.5}}},
    //       { $inc: { price: 10 } }
    //     );
        
    //     res.send({msg:data})
    //     }

    const updateRating=async(req,res)=>{
        // let data= await newBook.find({ratings:{$gt:5}});
        let data= await bookModel.find().populate("author")
        let c=data.filter(e=>e.author.rating>4.5)
        let ar=[]
        for (let index = 0; index < c.length; index++) {
           id=c[index]._id;
            prize=(c[index].price)+10;
           let final=await bookModel.findByIdAndUpdate(id,{ price:`${prize}`},{new:true})
             ar.push(final)
            // console.log(final)
        }
        res.send(ar)
     
    
    }

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.hardCoverStatus=hardCoverStatus
module.exports.updateRating=updateRating