const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    address: {
        street1: {
            type: String,
            required: true,
        },
        street2: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        pinCode: {
            type: String,
            required: true,
        }
    },
})

const Organization = mongoose.model('Organization',organizationSchema)

module.exports = Organization