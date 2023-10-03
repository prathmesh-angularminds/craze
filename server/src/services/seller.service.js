const { Seller } = require('./../models/index');
const ApiError = require('./../utils/apiError');
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');

/**
 * 
 * @param { Object } seller 
 * @returns new seller
 */
const signInSeller = async (newSeller) => {

    const seller = await Seller.findOne({email: newSeller.email})

    // If email is already exist
    if(seller) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Email already exist!!");
    }

    // Decrypting password
    let decryptedPassword = await bcrypt.hash(newSeller.password,12);
    Object.assign(newSeller,{password: decryptedPassword});

    return Seller.create(newSeller);
}

module.exports = {
    signInSeller
}