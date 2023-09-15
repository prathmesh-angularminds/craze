const ApiError = require('./../utils/apiError');
const { Seller } = require('./../models/index');
const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { sellerService, tokenService } = require('./../services/index');
const bcrypt = require('bcryptjs');

// Sign Up [Register] Seller
const signUpSeller = catchAsync(async(req,res,next) => {

    const seller = await Seller.find({email: req.body.email});

    // If email is already used
    if(seller.length) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Email already present");
    }
    
    // Decrypting password
    let decryptedPassword = await bcrypt.hash(req.body.password,12);
    Object.assign(req.body,{password: decryptedPassword});

    const newSeller = await sellerService.signInSeller(req.body)

    return res.send({message: "Seller created successfully",result: newSeller}).status(200)
})

// const signIn
const signInSeller = catchAsync(async(req,res,next) => {

    const seller = await Seller.findOne({email: req.body.email});

    // If email is not available
    if(!seller) {
        throw new ApiError(httpStatus.NOT_FOUND,"Invalid email or password");
    }

    // If password match
    if(! await bcrypt.compare(req.body.password,seller.password)) {
        throw new ApiError(httpStatus.NOT_FOUND,"Invalid email or password");
    } 

    const demo = tokenService.generateJwtToken(seller._id);

    console.log("Demo: ",demo);

    // res.send({

    // }).status(httpStatus.OK)

})

module.exports = {
    signUpSeller,
    signInSeller
}