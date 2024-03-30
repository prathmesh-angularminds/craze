const ApiError = require('./../utils/apiError');
const { Organization, Seller } = require('./../models/index');
const catchAsync = require('./../utils/catchAsync');
const httpStatus = require('http-status');
const { organizationService } = require('./../services/index');

// Configs
const { tokenType } = require('./../config/tokens');

// Services
const { sellerService, tokenService } = require('../services/index');

// create organization
const createOrganization = catchAsync(async(req,res,next) => {

    const orgName = req.body.orgName.toLowerCase()
    let org = await Organization.find({orgName: orgName});
    
    // Check whether organization name is present or not
    if(org.length) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Organization name " + req.body.orgName + " already present");
    }

    let newOrg = {
        orgName: orgName,
        orgEmail: req.body.orgEmail,
        gstIN: req.body.gstIN
    }


    newOrg = await organizationService.createOrganization(newOrg)

    return res.send({message: "Organization created successfully",result: newOrg}).status(httpStatus.OK)
})

// Get organization by id
const getOrganizationById = catchAsync(async (req,res,next) => {

    const organization = await organizationService.getOrganizationById(req.params.orgId);

    // If organization is not present
    if(!organization) {
        throw new ApiError(httpStatus.NOT_FOUND,"Organization not found");
    }

    return res.send({result: organization}).status(httpStatus.OK)
})

// Get organization users
const getOrganizationUsers = catchAsync(async (req,res) => {

    const organization = await organizationService.getOrganizationById(req.params.orgId);

    // If organization is not present
    if(!organization) {
        throw new ApiError(httpStatus.NOT_FOUND,"Organization not found");
    }

    let users = await sellerService.getOrganizationUsers(req.params.orgId);

    return res.send({result: users}).status(httpStatus.OK)
})

// Invite new seller in organization
const inviteNewSeller = catchAsync(async (req,res) => {

    const organization = await organizationService.getOrganizationById(req.params.orgId);

    // If organization is not present
    if(!organization) {
        throw new ApiError(httpStatus.NOT_FOUND,"Organization not found");
    }

    // If seller already exist;

    const seller = await sellerService.getSellerByEmailId(req.body.email);

    if(seller) {
        throw new ApiError(httpStatus.BAD_REQUEST,"Email already exist !!!")
    }
    
    let newSeller = req.body;
    Object.assign(newSeller,{
        _org: req.params.orgId,status: "Inactive",password: "demo123"
    })
    
    newSeller = sellerService.createSeller(newSeller)

    const token = tokenService.generateInviteNewSellerToken({id: newSeller._id,
        type: 'Seller'},tokenType.INVITE_USER)

    console.log("Token: ",token);

    res.send({result: null,message: "Invitation send successfully"}).status(httpStatus.OK);
    
})

module.exports = {
    createOrganization,
    getOrganizationById,
    getOrganizationUsers,
    inviteNewSeller
}