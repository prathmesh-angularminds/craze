const Joi = require('joi');
const { objectId } = require('./custom.validation');

const checkObjectId = {
    params: Joi.object().keys({
        sellerId: Joi.string().custom(objectId).required()
    })
}

module.exports = {
    checkObjectId
}