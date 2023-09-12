const { Seller } = require('./../models/index');

/**
 * 
 * @param { new seller } seller 
 * @returns new seller
 */
const signInSeller = (seller) => {
    return Seller.create(seller);
}

module.exports = {
    signInSeller
}