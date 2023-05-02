const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],
    
//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10},
    
//     // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
//     // {
//         // "ch1 ": "awesome intro to JS",
//         // "ch2" : "intro to nodejs",
//         // "ch3" : "intro to db"
//     //  }
//     summary :  mongoose.Schema.Types.Mixed,
//     isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

// }, { timestamps: true });

const bookSchema= new mongoose.Schema({
name : String,
author_id : {
    type : Number,
    require : true
},
author:{
type: mongoose.Schema.Types.ObjectId,
ref : "authorpopulate" 
},
price : Number,
rating : Number, 

})

module.exports = mongoose.model('bookpopulate', bookSchema) //users
