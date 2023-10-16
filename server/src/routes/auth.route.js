// Packages
const router = require("express").Router();

// Validations
const { authValidation } = require("./../validations");

// Controllers
const { sellerController } = require("./../controllers/index");

// Middlewares
// const auth = require("./../middleware/auth");
const validate = require("./../middleware/validate");

// Seller Authentication
router
    .route("/seller")
    .get(validate(authValidation.signIn), sellerController.signInSeller)                        // Seller Login
    .post(validate(authValidation.sellerSignUp), sellerController.signUpSeller);                // Seller Registration

router
    .route('/seller/forget-password')                                                           // Seller Forget Password
    .post(validate(authValidation.forgetPassword),sellerController.forgetPassword);

router
    .route('/seller/reset-password/:sellerId')                                                  // Seller Reset Password and Verify Reset Password
    .get(validate(authValidation.verifySellerResetPassword),sellerController.verifyResetPassword)
    .post(validate(authValidation.resetSellerPassword),sellerController.resetPassword)

// Customer Authentication


module.exports = router;