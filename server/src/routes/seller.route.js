const express = require('express');
const router = express.Router();
const validate = require('./../middleware/validate');
const { sellerValidation } = require('./../validations/index');
const { sellerController } = require('./../controllers/index');
const auth = require('./../middleware/auth');


// Token authentication which are defined under this middleware
router.use(auth.auth());

router.route('/')
.get(validate(sellerValidation.signInSeller),sellerController.signInSeller)
.post(validate(sellerValidation.signUpSeller),sellerController.signUpSeller)

// router.route('/:sellerId')
//     .get()
//     .delete()
//     .patch()


module.exports = router;