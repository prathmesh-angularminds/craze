const express = require('express');
const router = express.Router();
const validate = require('./../middleware/validate');
const { sellerValidation } = require('./../validations/index');
const { sellerController } = require('./../controllers/index');

// router.use((req,res,next) => {
//     console.log("Comment");
//     next()
// })

router.route('/')
    .get(validate(sellerValidation.signInSeller),sellerController.signInSeller)
    .post(validate(sellerValidation.signUpSeller),sellerController.signUpSeller)

// router.route('/:sellerId')
//     .get()
//     .delete()
//     .patch()


module.exports = router;