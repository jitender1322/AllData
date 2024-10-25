const mongoose = require('mongoose');
const DetailModel = mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    published: {
        type: Number,
        required: true
    },
    pages: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    copiesofpublished: {
        type: Number,
        required: true
    }
})

const BookModel = mongoose.model('Book', DetailModel)
module.exports = BookModel;