const express = require('express');
const router = express.Router();

// Middleware
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

// Validations
const { organizationValidation } = require('./../validations/index')
const { organizationController } = require('./../controllers/index')

// Create new organization
router.route('/')
    .post(validate(organizationValidation.createOrganization),organizationController.createOrganization);

// Get organization by id
router.route('/:orgId')
    .get(validate(organizationValidation.checkObjectId),organizationController.getOrganizationById)

// Self call
router.use(auth.auth());

// Get organization
router.route('/users/:orgId')
    .get(validate(organizationValidation.checkObjectId),organizationController.getOrganizationUsers)

module.exports = router