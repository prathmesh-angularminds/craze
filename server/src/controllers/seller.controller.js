const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { sellerService } = require('./../services/index');

// Sign Up [Register]
const signUpSeller = catchAsync(async(req,res,next) => {

    const newSeller = await sellerService.signUpSeller(req.body)

    return res.send({message: "Seller is created successfully",result: newSeller}).status(200)
})

// Sign In [Login]
const signInSeller = catchAsync(async(req,res,next) => {

    let token = await sellerService.signInSeller(req.body);
    res.send({token: token}).status(httpStatus.OK)
})

// Forget password
const forgetPassword = catchAsync(async(req,res,next) => {

    const link = await sellerService.forgetPassword(req.body.email);
    console.log(link);
    
    res.send({message: "Reset password link is send to " + req.body.email + " mail"}).status(httpStatus.OK)
})

// Verify reset password
const verifyResetPassword = catchAsync(async(req,res,next) => {

    const seller = await sellerService.verifyResetPassword(req.params.sellerId,req.query.token)
    res.send({verified: true}).status(httpStatus.OK)
})

// Reset password
const resetPassword = catchAsync(async(req,res,next) => {

    const seller = await sellerService.resetPassword(req.params.sellerId,req.query.token,req.body.password)

    res.send({message: "Password reset successfully"}).status(httpStatus.OK)

})

const getAllSellers = catchAsync(async(req,res,next) => {

    let sellers = await sellerService.getAllSellers();
    res.send({result: sellers}).status(httpStatus.OK);
})

// Get seller by mongoose id
const getSellerById = catchAsync(async(req,res,next) => {

    let seller = await sellerService.getSellerById(req.params.sellerId);
    res.send({result: seller}).status(httpStatus.OK)
})

// Delete seller by mongoose id
const deleteSellerById = catchAsync(async(req,res,next) => {

    await sellerService.deleteSellerById(req.params.sellerId);
    res.send({result: null,message: "Seller deleted successfully"}).status(httpStatus.OK);
})

module.exports = {
    signUpSeller,
    signInSeller,
    forgetPassword,
    verifyResetPassword,
    resetPassword,
    getSellerById,
    deleteSellerById,
    getAllSellers
}