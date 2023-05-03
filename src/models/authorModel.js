const mongoose = require('mongoose');

// const authorSchema = new mongoose.Schema( {
//     author_id: String,
//     author_name: String,
//     age:Number,
//     address:String

// }, { timestamps: true });
const authorSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  rating: { type: Number, required: true }

}, { timestamps: true });



module.exports = mongoose.model('GirishAuthor', authorSchema)
