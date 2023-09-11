const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    __org: {
        type: mongoose.Types.ObjectId,
        ref: 'Organization',
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    role: {
        type: String,
        trim: true,
        required: true
    },
    profile: {
        public_id: {
            type: String,
            trim: true,
            required: true
        },
        url: {
            type: String,
            trim: true,
            required: true
        }
    },
    password: {
        string: String,
        trim: true,
        required: true
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User