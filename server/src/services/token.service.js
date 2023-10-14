require('dotenv').config()
const jwt = require('jsonwebtoken');

/**
 * This method create a new json web token
 * @param {Object} payload 
 * @returns jwt token 
 */
const generateToken = (payload) => {
    return jwt.sign(payload,process.env.JWT_SECRET);
}

/**
 * This method is called while sign in a user to generate a new jwt token
 * @param {Mongoose id} id 
 * @returns jwt token
 */
const generateAuthToken = (payload) => {

    const token = generateToken(payload);
    return token
}

// const generateForgetPasswordToken = () => {

// }

// const generateInviteUserToken = () => {

// }

module.exports = {
    generateAuthToken,
    // generateForgetPasswordToken,
    // generateInviteUserToken
}