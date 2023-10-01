const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
    _org: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    name: {
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
})

const Seller = mongoose.model('Seller',sellerSchema);
module.exports = Seller