const ApiError = require('./../utils/apiError');
const { Seller } = require('./../models/index');
const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { sellerService } = require('./../services/index');

// Sign Up [Register] Seller
const signUpSeller = catchAsync(async(req,res,next) => {

    const seller = await Seller.find({email: req.body.email})[0];

    if(seller) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Email already present");
    }

    const newSeller = await sellerService.signInSeller(req.body)

    return res.send(newSeller).status(200)
})

// const signUp

module.exports = {
    signUpSeller
}