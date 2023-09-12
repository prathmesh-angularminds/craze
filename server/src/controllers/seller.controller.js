const ApiError = require('./../utils/apiError');
const { Seller } = require('./../models/index');
const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { sellerService, tokenService } = require('./../services/index');
const bcrypt = require('bcrypt');

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

    const seller = await Seller.find({email: req.body.email});

    // If email is not available
    if(!seller.length) {
        throw new ApiError(httpStatus.NOT_FOUND,"Invalid email or password");
    }

    console.log(req.body.password)
    let demo = bcrypt.compare(req.body.password,seller.password).then((data) => console.log(data)).catch((err) => console.log(err))
    console.log(demo)
    // If password match
    // if(! await bcrypt.compare(req.body.password,seller.password)) {
        // throw new ApiError(httpStatus.NOT_FOUND,"Invalid email or password");
    // } 

    tokenService.generateJwtToken(seller._id);

    res.send({

    }).status(httpStatus.OK)

})

module.exports = {
    signUpSeller,
    signInSeller
}