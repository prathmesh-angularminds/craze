const mongoose = require('mongoose');

const sellerRole = ['Admin','Order-Manager','Product-Manager']

const sellerStatus = ['Active','Inactive','Invited'];

const sellerSchema = new mongoose.Schema({
    _org: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    sellerRole: {
        type: String,
        trim: true,
        required: true,
        enum: sellerRole
    },
    status: {
        type: String,
        trim: true,
        required: true,
        enum: sellerStatus
    }
})



const Seller = mongoose.model('Seller',sellerSchema);
module.exports = Seller