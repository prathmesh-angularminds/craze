const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const productType = ["CLOTHS", "JEWELLERY", "FOOT-WARE", "ACCESSORY"]

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
    },
    productType: {
        type: String,
        trim: true,
        enum: productType,
        required: true
    },
    productSubType: {
        type: String,
        trim: true,
        required: true
    },
    category: {
        type: String,
        trim: true,
        enum: ["MEN", "WOMEN", "KIDS"],
        required: true
    },
    images: [{
        public_id: {
            type: String,
        },
        url: {
            type: String
        }
    }],
    hasOffer: {
        type: Boolean,
        required: true
    },
    offerPercentage: {
        type: Number,
        required: true,
    }
})

const Product = mongoose.model('product', productSchema)

module.exports = Product