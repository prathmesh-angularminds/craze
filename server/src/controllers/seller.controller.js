// Packages
const bcrypt = require('bcrypt');
const httpStatus = require('http-status');

// Configs
const { tokenType } = require('./../config/tokens');

// Services
const { emailService, sellerService, organizationService, tokenService } = require('./../services/index');

// Utils
const ApiError = require('./../utils/apiError');
const catchAsync = require('./../utils/catchAsync');

// Sign Up [Register]
const signUpSeller = catchAsync(async(req,res) => {

    let org = organizationService.getOrganizationById(req.body._org);

    // If organization does not exist throw an error
    if(!org) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Organization does not exist");
    }  

    let seller = await sellerService.getSellerByEmailId(req.body.email);

    // If email is already exist throw an error
    if(seller) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Email already exist!!");
    }

    seller = req.body;

    // Decrypting password
    let decryptedPassword = await bcrypt.hash(seller.password,12);
    Object.assign(seller,{password: decryptedPassword});

    const newSeller = await sellerService.createSeller(seller)

    return res.send({message: "Seller is created successfully",result: newSeller}).status(200)
})


// Sign In [Login]
const signInSeller = catchAsync(async(req,res) => { 

    let seller = await sellerService.getSellerByEmailId(req.body.email);

    // If we get seller as null then throw an error.
    // If email is not available throw an error
    if(!seller) {
        throw new ApiError(httpStatus.NOT_FOUND, "Invalid email or password");
    }

    // If password does not match throw an error    
    if (! await bcrypt.compare(req.body.password, seller.password)) {
        throw new ApiError(httpStatus.NOT_FOUND, "Invalid email or password");
    }

    let token = tokenService.generateAuthToken({
        id: seller._id,
        type: 'Seller'
    });
    
    // Setting jwt token in cookies
    res.cookie("access_token",token);
    res.send(null).status(httpStatus.OK)
})

// Forget password
const forgetPassword = catchAsync(async(req,res) => {

    const seller = await sellerService.getSellerByEmailId(req.body.email);
    
    const token = tokenService.generateResetPasswordToken({
        id: seller._id,
        type: 'Seller'
    }, tokenType.RESET_PASSWORD + seller.password);

    await emailService.sendResetPasswordMail(
        {
            to: req.body.email,
        },
        {
            text: "This is a reset password mail"
        },
        {
            token: token,
            sellerId: seller._id,
            sellerName: seller.name,
            _org: seller._org
        }
    );
    
    res.send({message: "Reset password link is send to " + req.body.email + " mail"}).status(httpStatus.OK)
})

// Verify reset password
const verifyResetPassword = catchAsync(async(req,res) => {

    const seller = await sellerService.verifyResetPassword(req.params.sellerId,req.query.token)
    res.send({verified: true}).status(httpStatus.OK)
})

// Reset password
const resetPassword = catchAsync(async(req,res) => {

    const seller = await sellerService.resetPassword(req.params.sellerId,req.query.token,req.body.password)
    res.send({message: "Password reset successfully"}).status(httpStatus.OK)
})

// Invite new Seller

const getAllSellers = catchAsync(async(req,res,next) => {

    let sellers = await sellerService.getAllSellers();
    res.send({result: sellers}).status(httpStatus.OK);
})

// Get seller by mongoose id
const getSellerById = catchAsync(async(req,res,next) => {

    let seller = await sellerService.getSellerById(req.params.sellerId);

    // If seller is not available throw error
    if (!seller) {
        throw new ApiError(httpStatus.NOT_FOUND, "Seller not found");
    }
    
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