require('dotenv').config();
const {Strategy: JwtStrategy, ExtractJwt, Strategy} = require('passport-jwt');
const { Seller } = require('./../models/seller.model'); 

const jwtOptions = {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()    // taken a bearer token
}

const verifyJWT = async (payload, done) => {

    try {

        const user = await Seller.findById(payload._id);

        // If User is not found then if will be executed where done() will be called with an authentication failure
        if(!user) {
            done(null,false)
        }

        done(null,user)

    } catch(error) {
        done(error,false)
    }
}

const jwtStrategy = new JwtStrategy(jwtOptions,verifyJWT);

module.exports = {jwtStrategy};