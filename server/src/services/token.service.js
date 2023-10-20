require('dotenv').config()
const jwt = require('jsonwebtoken');
const {tokens} = require('./../config/tokens');

/**
 * This method create a new json web token
 * @param {Object} payload 
 * @returns jwt token 
 */
const generateToken = (payload,secretKey,expiresIn) => {
    return jwt.sign(payload,secretKey,{expiresIn});
}

/**
 * This method is called while sign in a user to generate a new jwt token
 * @param {Mongoose id} id 
 * @returns jwt token
 */
const generateAuthToken = (payload,authTokenKey) => {

    const expiresIn = '1d';
    const secretKey = process.env.JWT_SECRET + authTokenKey
    const token = generateToken(payload,secretKey,expiresIn);
    return token
}

const generateResetPasswordToken = (payload,forgetPasswordKey) => {

    const expiresIn = '15m';
    const secretKey = process.env.JWT_SECRET + forgetPasswordKey
    const token = generateToken(payload,secretKey,expiresIn);
    return token
}

const verifyJwtToken = (token,secretKey) => {

    return jwt.verify(token,process.env.JWT_SECRET + secretKey);
}

module.exports = {
    generateAuthToken,
    generateResetPasswordToken,
    verifyJwtToken
}