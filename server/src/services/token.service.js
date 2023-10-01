// const jwt = require('jsonwebtoken')
// const moment = require('moment');
// require('dotenv').config()

// /**
//  * 
//  * @param {user mongoose id} id 
//  * @param {token expiry time} expires 
//  * @param {token secret key} secret 
//  * @returns 
//  */
// const generateToken = (id,expires,secret = process.env.JWT_SECRET) => {

//     const payload = {
//         sub: id,
//         iat: moment().unix(),
//         exp: expires.unix()
//     }

//     return jwt.sign(payload,secret);
// }

// /**
//  * 
//  * @param {user mongoose id} userId 
//  * @returns 
//  */
// const generateJwtToken = (userId) => {
//     const accessTokenExpiry = moment().add(process.env.JWT_ACCESS_TOKEN_EXPIRATION_MINUTE,'minute')
//     const accessToken = generateToken(userId,accessTokenExpiry);

//     return {
//         token: accessToken
//     }
// }

// module.exports = {
//     generateJwtToken
// }