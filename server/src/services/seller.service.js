// Packages
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const { tokenType } = require('./../config/tokens');

// Models
const { Seller } = require('./../models/index');

// Services
const organizationService = require('./organization.service');
const tokenService = require('./token.service');

// Utils
const ApiError = require('./../utils/apiError');
const { default: mongoose } = require('mongoose');
const { object } = require('joi');




/**
 * Sign Up
 * @param { Object } seller 
 * @returns new seller
 */
const signUpSeller = async (newSeller) => {

    let org = organizationService.getOrganizationById(newSeller._org);

    // If organization does not exist throw an error
    if(!org) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Organization does not exist");
    }

    const seller = await getSellerByEmailId(newSeller.email);

    // If email is already exist
    if(seller) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Email already exist!!");
    }

    // Decrypting password
    let decryptedPassword = await bcrypt.hash(newSeller.password,12);
    Object.assign(newSeller,{password: decryptedPassword});

    return Seller.create(newSeller);
}



/**
 * 
 * @param {object} signInPayload 
 * @returns jwt token
 */
const signInSeller = async (signInPayload) => {

    const seller = await getSellerByEmailId(signInPayload.email);

    // If email is not available
    if(!seller) {
        throw new ApiError(httpStatus.NOT_FOUND,"Invalid email or password");
    }

    // If password match
    if(! await bcrypt.compare(signInPayload.password,seller.password)) {
        throw new ApiError(httpStatus.NOT_FOUND,"Invalid email or password");
    } 

    const tokenPayload = {
        id: seller._id,
        type: 'Seller'
    }

    let token = tokenService.generateAuthToken(tokenPayload,tokenType.USER_REGISTRATION);    
    return token;
}



/**
 * 
 * @param {*} email 
 * @returns 
 */
const forgetPassword = async (email) => {

    const seller = await getSellerByEmailId(email);
    const token = tokenService.generateResetPasswordToken({
        id: seller._id,
        type: 'Seller'
    },tokenType.RESET_PASSWORD + seller.password); 

    return `http://localhost:4200/seller/auth/reset-password/${seller._id}?token=${token}`;
    
}

/**
 * 
 * @param {*} token 
 */
const verifyResetPassword = async (sellerId,token) => {

    // If error occur throw an error for reset password verification failed
    try {
        let seller = await getSellerById(sellerId);
        
        const resetPasswordTokenDoc = tokenService.verifyJwtToken(token,tokenType.RESET_PASSWORD + seller.password);
        seller = await getSellerById(resetPasswordTokenDoc.id);

        return seller;
    } catch(error) {

        throw new ApiError(httpStatus.UNAUTHORIZED,"Reset password verification failed");
    }
}


const resetPassword = async (sellerId,token,password) => {

    // If error occur throw an error for reset password verification failed
    try {
        let seller = await getSellerById(sellerId);
        const resetPasswordTokenDoc = tokenService.verifyJwtToken(token,tokenType.RESET_PASSWORD + seller.password);
        
        let decryptedPassword = await bcrypt.hash(password,12);
        seller = await updateSellerById(resetPasswordTokenDoc.id,{password: decryptedPassword});
        return seller;
    } catch(error) {

        throw new ApiError(httpStatus.UNAUTHORIZED,"Reset password verification failed");
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
    if(!seller) {
        throw new ApiError(httpStatus.NOT_FOUND,"Seller not found");
    }

    return seller;
}


const updateSellerById = async (sellerId,payload) => {

    const seller = await getSellerById(sellerId);
    console.log(seller,payload);
    Object.assign(seller,payload)
    console.log(seller);
    await seller.save();

} 

/**
 * 
 * @param {string} email 
 * @returns Seller object
 */
const getSellerByEmailId = async (email) => {

    const seller = await Seller.findOne({email});

    if(!seller) {
        throw new ApiError(httpStatus.NOT_FOUND,'Seller not found')
    }

    return seller;
}

const deleteSellerById = async (sellerId) => {

    let seller = await getSellerById(sellerId);
    seller = await Seller.deleteOne({_id: sellerId});

    return seller;
}

module.exports = {
    signUpSeller,
    signInSeller,
    forgetPassword,
    verifyResetPassword,
    resetPassword,
    getAllSellers,
    getSellerById,
    deleteSellerById
}

// org: 65000b239f56f1c568307831