const objectId = (value, helpers) => {    
    if(!value.match(/^[0-9a-fA-F]{24}$/)) {
        return helpers.message('"{{#label}} must be a valid mongo id"')
    }
    return value; 
}

const gstIn = (value, helpers) => {
    if(!value.match(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/)) {
        return helpers.message('"{{#label}} must be a valid Gst Number"')
    }

    return value
}

module.exports = {
    objectId,
    gstIn
}