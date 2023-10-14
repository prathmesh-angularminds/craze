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

// Customer Authentication

// router.route("/customer").get().post();

module.exports = router;