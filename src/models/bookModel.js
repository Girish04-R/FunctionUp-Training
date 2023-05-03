const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

// const bookSchema = new mongoose.Schema( {
//     name: String,
//     author_id: {
//         type: ObjectId,
//         ref: "LibraryAuthor"
//     }, 
//     price: Number,
//     rating: Number


// }, { timestamps: true });
const bookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        ref: "GirishAuthor",
        required: true
    }, 
    price: Number,
    rating: Number,
    publisher : {
        type : ObjectId,
        ref : 'GirishPublisher',
        required : true
    },
    isHardCover :{
        type: Boolean,
        default : false
    }


}, { timestamps: true });

module.exports = mongoose.model('GirishBook', bookSchema)
