const express = require('express');
const router = express.Router();
const validate = require('./../middleware/validate');
const { organizationValidation } = require('./../validations/index')
const { organizationController } = require('./../controllers/index')

router.route('/')
    .post(validate(organizationValidation.createOrganization),organizationController.createOrganization);

router.route('/:orgId')
    .get(validate(organizationValidation.checkObjectId),organizationController.getOrganizationById)

module.exports = router