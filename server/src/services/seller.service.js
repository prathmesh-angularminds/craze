const { Seller } = require('./../models/index');

/**
 * Create new seller
 * @param {*} seller 
 */
const signInSeller = (seller) => {

    Seller.create(seller);
}

module.exports = {
    signInSeller
}