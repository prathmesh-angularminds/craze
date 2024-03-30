const express = require('express');
const router = express.Router();

// Middleware
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

// Validations
const { organizationValidation } = require('./../validations/index')
const { organizationController } = require('./../controllers/index')

// Self call
router.use(auth.auth());

// Create new organization
router.route('/')
    .post(validate(organizationValidation.createOrganization),organizationController.createOrganization);

// Get organization by id
router.route('/:orgId')
    .get(validate(organizationValidation.checkObjectId),organizationController.getOrganizationById)

// Invite new seller
router.route("/invite-seller/:orgId")
    .post(validate(organizationValidation.inviteNewSeller),organizationController.inviteNewSeller);               

// Get organization
router.route('/users/:orgId')
    .get(validate(organizationValidation.checkObjectId),organizationController.getOrganizationUsers)

module.exports = router