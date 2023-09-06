const Joi = require('joi');
const {objectId} = require('./custom.validation');

// Create Product schema
const createProduct = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().integer().min(5).max(100000).required(),
        stock: Joi.array().items({
            color: Joi.string().required(),
            size: Joi.object().keys({
                label: {
                    label: Joi.string().required(),
                    labelCount: Joi.number().integer()
                }
            })
        }),
        productType: Joi.string().required(),
        productSubType: Joi.string().required(),
        category: Joi.string().required()
    }) 
}

// Update product schema
const updateProduct = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().integer().min(5).max(100000).required(),
        stock: Joi.array().items({
            color: Joi.string().required(),
            size: Joi.object().keys({
                label: {
                    label: Joi.string().required(),
                    labelCount: Joi.number().integer()
                }
            })
        }),
        productType: Joi.string().required(),
        productSubType: Joi.string().required(),
        category: Joi.string().required()
    }) 
}

// Delete image by public id
const deleteImageByPublicId = Joi.object().keys({
    images: Joi.array().items({
        public_id: Joi.string().required()
    })
})

const checkObjectId = {
    params: Joi.object().keys({
        productId: Joi.string().required().custom(objectId)
    })
}

module.exports = {
    createProduct,
    updateProduct,
    checkObjectId,
    deleteImageByPublicId
}
