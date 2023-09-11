const { Organization } = require('./../models/index');

/**
 * Create new Organization
 * @param {*} Organization 
 */
const createOrganization = async (organization) => {

    return await Organization.create(organization);
}

module.exports = {
    createOrganization
}