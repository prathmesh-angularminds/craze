const Joi = require('joi');
const { objectId, gstIn } = require('./custom.validation');

// Register
const createOrganization = {
    body: Joi.object().keys({
        orgName: Joi.string().required(),
        orgEmail: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),
        gstIN: Joi.string().required().custom(gstIn)
    }) 
}

module.exports = {
    createOrganization
}