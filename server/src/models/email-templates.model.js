const mongoose = require('mongoose');

const email_templates = mongoose.Schema({
    org: {
        type: mongoose.Types.ObjectId
    },
    html: {
        type: String,
        required: true
    },
    template: {
        type: String,
        required: true
    }
})


const EmailTemplates = mongoose.model('emailtemplates',email_templates);
module.exports = EmailTemplates
