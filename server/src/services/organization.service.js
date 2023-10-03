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

    let org = await Organization.findById(orgId);

    // If organization does not exist
    if(!org) {
        throw new ApiError(httpStatus.NOT_FOUND,"Organization not found !!")
    }

    return org;
}

module.exports = {
    createOrganization,
    getOrganizationById
}