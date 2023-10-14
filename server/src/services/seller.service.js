// Packages
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');

// Models
const { Seller } = require('./../models/index');

// Services
const organizationService = require('./organization.service');
const tokenService = require('./token.service');

// Utils
const ApiError = require('./../utils/apiError');
const { default: mongoose } = require('mongoose');

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

    let token = tokenService.generateAuthToken(tokenPayload);    
    return token;
}

/**
 * 
 * @returns seller list
 */
const getAllSellers = () => {

    const sellers = Seller.find();

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

/**
 * 
 * @param {string} email 
 * @returns Seller object
 */
const getSellerByEmailId = async (email) => {

    const seller = await Seller.findOne({email});

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
    getAllSellers,
    getSellerById,
    deleteSellerById
}

// org: 65000b239f56f1c568307831