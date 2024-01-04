const mongoose = require('mongoose')

const organizationSchema = new mongoose.Schema({
    orgName: {
        type: String,
        trim: true,
        required: true
    },
    orgEmail: {
        type: String,
        trim: true,
        required: true
    },
    gstIN: {
        type: String,
        trim: true,
        required: true
    },
    orgUserCount: {                                 // Represents number of users in org
        type: Number,
    },
    address: {
        street1: {
            type: String,
        },
        street2: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        pinCode: {
            type: String,
        }
    },
})

const Organization = mongoose.model('Organization',organizationSchema)

module.exports = Organization