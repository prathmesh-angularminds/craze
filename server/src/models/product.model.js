const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const productType = ["CLOTHS", "JEWELLERY", "FOOT-WARE", "ACCESSORY"]

const productSchema = new mongoose.Schema({
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
    description: {
        type: String,
        trim: true,
        required: true
    },
    productDetails: {
        label: {
            type: String,
            trim: true,
            required: true
        }
    },
    price: {
        type: Number,
        required: true
    },
    hasOffer: {
        type: Boolean,
    },
    offerPercentage: {
        type: Number,
    },
    stock: [{
        color: {
            type: String,
            trim: true,
            required: true
        },
        size: {
            label: {
                type: String,
                trim: true,
                required: true
            },
            labelCount: {
                type: Number,
                trim: true,
                required: true,
            }
        }
    }],
    createdAt: {
        type: Date,
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
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
            trim: true,
        },
        url: {
            type: String,
            trim: true
        }
    }],
})

const Product = mongoose.model('product', productSchema)

module.exports = Product