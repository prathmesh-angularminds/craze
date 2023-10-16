require('dotenv').config()
const jwt = require('jsonwebtoken');

/**
 * This method create a new json web token
 * @param {Object} payload 
 * @returns jwt token 
 */
const generateToken = (payload,expiresIn) => {
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn});
}

/**
 * This method is called while sign in a user to generate a new jwt token
 * @param {Mongoose id} id 
 * @returns jwt token
 */
const generateAuthToken = (payload) => {

    const expiresIn = '1d';
    const token = generateToken(payload,expiresIn);
    return token
}

const generateForgetPasswordToken = (payload) => {

    const expiresIn = '15m';
    const token = generateToken(payload,expiresIn);
    return token
}

// const generateInviteUserToken = () => {

// }

const verifyJwtToken = (token) => {

    return jwt.verify(token,process.env.JWT_SECRET);
}

module.exports = {
    generateAuthToken,
    generateForgetPasswordToken,
    verifyJwtToken
    // generateInviteUserToken
}