const ApiError = require('./../utils/apiError');
const { Organization } = require('./../models/index');
const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { organizationService } = require('./../services/index');

// create organization
const createOrganization = catchAsync(async(req,res,next) => {

    const org = await Organization.find({orgName: req.body.orgName})[0];

    console.log(org);
    
    // Check whether organization name is present or not
    if(org) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Organization name " + req.body.orgName + " already present");
    }

    const newOrg = {
        orgName: req.body.orgName.toLowerCase(),
        orgEmail: req.body.orgEmail,
        gstIN: req.body.orgEmail
    }

    await organizationService.createOrganization(newOrg)

    return res.send({message: "Organization created successfully"}).status(200)
})

module.exports = {
    createOrganization
}