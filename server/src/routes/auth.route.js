// Packages
const router = require("express").Router();

// Validations
const { authValidation } = require("./../validations");

// Controllers
const { sellerController } = require("./../controllers/index");

// Middlewares
const validate = require("./../middleware/validate");
const verifyCaptcha = require('../middleware/captcha');

// Seller Authentication
router.route("/seller/sign-in").post(verifyCaptcha.verify,validate(authValidation.signIn), sellerController.signInSeller)  // Seller Login
router.route("/seller/sign-up").post(validate(authValidation.sellerSignUp), sellerController.signUpSeller);                // Seller Registration

router.route('/seller/forget-password').post(validate(authValidation.forgetPassword),sellerController.forgetPassword);     // Seller Forget Password

router.route('/seller/reset-password/:sellerId')                                                  // Seller Reset Password and Verify Reset Password
.get(validate(authValidation.verifySellerResetPassword),sellerController.verifyResetPassword)
    .post(validate(authValidation.resetSellerPassword),sellerController.resetPassword)

// Customer Authentication


module.exports = router;