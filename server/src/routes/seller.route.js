const express = require('express');
const router = express.Router();
const validate = require('./../middleware/validate');
const { sellerValidation } = require('./../validations/index');
const { sellerController } = require('./../controllers/index');
const auth = require('./../middleware/auth');


// Token authentication which are defined under this middleware
router.use(auth.auth());

// Route to get all sellers
router.route('/')
    .get(sellerController.getAllSellers);

// Route to get, update and delete seller
router.route('/:sellerId')
    .get(validate(sellerValidation.checkObjectId),sellerController.getSellerById)
    // .patch(validate(sellerValidation))
    .delete(validate(sellerValidation.checkObjectId),sellerController.deleteSellerById)

module.exports = router;