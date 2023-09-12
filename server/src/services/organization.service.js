const { Organization } = require('./../models/index');

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