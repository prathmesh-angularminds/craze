const ApiError = require('./../utils/apiError');
const { Seller } = require('./../models/index');
const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { sellerService, tokenService, organizationService } = require('./../services/index');
const bcrypt = require('bcrypt');

// const { v4: uuidv4} = require('uuid');
// const { setUser, getUser} = require('./../config/sessionToUserMap');

// Sign Up [Register] Seller
const signUpSeller = catchAsync(async(req,res,next) => {
    
    // Check whether organization is exist or not
    const org = await organizationService.getOrganizationById(req.body._org);

    const newSeller = await sellerService.signInSeller(req.body)

    return res.send({message: "Seller created successfully",result: newSeller}).status(200)
})

// Sign In [Login] Seller
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

    let token = tokenService.generateAuthToken(seller._id);    
    res.cookie('access_token',token);

    res.send({token: token}).status(httpStatus.OK)

})

module.exports = {
    signUpSeller,
    signInSeller
}