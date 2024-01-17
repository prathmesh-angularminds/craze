const { Organization } = require('./../models/index');
const ApiError = require('./../utils/apiError');
const httpStatus = require('http-status');

/**
 * Create new Organization
 * @param {*} Organization 
 */
const createOrganization = async (organization) => {

    return await Organization.create(organization);
}

/**
 * 
 * @param {organization id} orgId 
 * @returns organization
 */
const getOrganizationById = async (orgId) => {

    return await Organization.findById(orgId);
}

module.exports = {
    createOrganization,
    getOrganizationById
}