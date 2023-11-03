// Packages
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const { tokenType } = require('./../config/tokens');

// Models
const { Seller } = require('./../models/index');

// Services
const tokenService = require('./token.service');

// Utils
const ApiError = require('./../utils/apiError');

/**
 * Create new seller
 * @param { Object } seller 
 * @returns { Promise<Seller> }
 */
const createSeller = async (newSeller) => {

    return Seller.create(newSeller);
}

/**
 * 
 * @param {*} token 
 */
const verifyResetPassword = async (sellerId, token) => {

    // If error occur throw an error for reset password verification failed
    try {
        let seller = await getSellerById(sellerId);

        const resetPasswordTokenDoc = tokenService.verifyJwtToken(token, tokenType.RESET_PASSWORD + seller.password);
        seller = await getSellerById(resetPasswordTokenDoc.id);

        return seller;
    } catch (error) {

        throw new ApiError(httpStatus.UNAUTHORIZED, "Reset password verification failed");
    }
}


const resetPassword = async (sellerId, token, password) => {

    // If error occur throw an error for reset password verification failed
    try {
        let seller = await getSellerById(sellerId);
        const resetPasswordTokenDoc = tokenService.verifyJwtToken(token, tokenType.RESET_PASSWORD + seller.password);

        let decryptedPassword = await bcrypt.hash(password, 12);
        seller = await updateSellerById(resetPasswordTokenDoc.id, { password: decryptedPassword });
        return seller;
    } catch (error) {

        throw new ApiError(httpStatus.UNAUTHORIZED, "Reset password verification failed");
    }
}

/**
 * 
 * @returns seller list
 */
const getAllSellers = async () => {

    const sellers = await Seller.find();

    return sellers;
}

/**
 * 
 * @param {mongoose id} sellerId 
 * @returns Seller object
 */
const getSellerById = async (sellerId) => {

    const seller = Seller.findById(sellerId);

    // If seller is not available throw error
    if (!seller) {
        throw new ApiError(httpStatus.NOT_FOUND, "Seller not found");
    }

    return seller;
}


const updateSellerById = async (sellerId, payload) => {

    const seller = await getSellerById(sellerId);
    console.log(seller, payload);
    Object.assign(seller, payload)
    console.log(seller);
    await seller.save();

}

/**
 * 
 * @param {string} email 
 * @returns Seller object
 */
const getSellerByEmailId = async (email) => {

    const seller = await Seller.findOne({ email });

    if (!seller) {
        throw new ApiError(httpStatus.NOT_FOUND, 'Seller not found')
    }

    return seller;
}

const deleteSellerById = async (sellerId) => {

    let seller = await getSellerById(sellerId);
    seller = await Seller.deleteOne({ _id: sellerId });

    return seller;
}

module.exports = {
    createSeller,
    verifyResetPassword,
    resetPassword,
    getAllSellers,
    getSellerById,
    getSellerByEmailId,
    deleteSellerById
}

// org: 65000b239f56f1c568307831