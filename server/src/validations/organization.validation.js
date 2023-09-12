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

// Check organization id
const checkObjectId = {
    params: Joi.object().keys({
        orgId: Joi.string().required().custom(objectId)
    })
}

module.exports = {
    createOrganization,
    checkObjectId
}