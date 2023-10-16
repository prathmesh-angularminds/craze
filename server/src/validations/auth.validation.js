const Joi = require('joi');
const {objectId} = require("./custom.validation");

const signIn = {
    body: Joi.object().keys({
        email: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),
        password: Joi.string().required(),
    })
}

const sellerSignUp = {
    body: Joi.object().keys({
        _org: Joi.string().required().custom(objectId),
        name: Joi.string().required(),
        email: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),          // tlds means the domain should be .com, .net or .in
        password: Joi.string().required()
    })
}

const forgetPassword = {
    body: Joi.object().keys({
        email: Joi.string().email({tlds: {allow: ['com','net','in']}}).required(),          // tlds means the domain should be .com, .net or .in
    })
}

const verifySellerResetPassword = {
    params: Joi.object().keys({
        sellerId: Joi.string().required()
    }),
    query: Joi.object().keys({
        token: Joi.string().required()
    })
}

const resetSellerPassword = {
    params: Joi.object().keys({
        sellerId: Joi.string().required()
    }),
    query: Joi.object().keys({
        token: Joi.string().required()
    }),
    body: Joi.object().keys({
        password: Joi.string().required()
    })
}

module.exports = {
    signIn,
    sellerSignUp,
    forgetPassword,
    verifySellerResetPassword,
    resetSellerPassword
}