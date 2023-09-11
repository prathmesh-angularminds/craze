const Joi = require('joi');
const { objectId } = require('./custom.validation');

// Register
const signUpSeller = {
    body: Joi.object().keys({
        _org: Joi.string().required().custom(objectId),
        name: Joi.string().required(),
        email: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),
        password: Joi.string().required()
    }) 
}

// Login 
const signInSeller = {
    body: Joi.object().keys({
        email: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),
        password: Joi.string().required()
    })
}


module.exports = {
    signUpSeller,
    signInSeller
}