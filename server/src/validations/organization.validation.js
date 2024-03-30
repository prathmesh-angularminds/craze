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

// Check Invited user for organization
const inviteNewSeller = {
    params: Joi.object().keys({
        orgId: Joi.string().required().custom(objectId)
    }),
    body: Joi.object().keys({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),          // tlds means the domain should be .com, .net or .in
        sellerRole: Joi.string().required()
    })
}

module.exports = {
    createOrganization,
    checkObjectId,
    inviteNewSeller
}