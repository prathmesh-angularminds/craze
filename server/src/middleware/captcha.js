const catchAsync = require("../utils/catchAsync");
const axios = require("axios");
const httpStatus = require('http-status');
require("dotenv").config();
const ApiError = require('../utils/apiError');

const verifyCaptcha = catchAsync(async (req, res, next) => {

    // If recaptcha is not false execute
    if (req.query.captcha !== "false") {
        try {
            let captcha = req.body.reCaptcha;
            delete req.body.reCaptcha; // Deleting captcha from body

            // If captcha not found
            if (!captcha) {
                throw new Error("Error: Captcha required");
            }

            const options = {
                url: `https://www.google.com/recaptcha/api/siteverify?response=${captcha}&secret=${process.env.RECAPTCHA_SECRET_KEY}`,
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios(options);

            if (data.success || req.query.ignoreCaptcha) {
                next();
            } else {
                throw new ApiError(
                    httpStatus.UNAUTHORIZED,
                    "ReCaptcha verification failed. Please try again."
                );
            }

        } catch (error) { 
        throw new ApiError(httpStatus.UNPROCESSABLE_ENTITY,error.message || error)
        }
    } else {
        // If recaptcha is false then execute next middleware
        next();
    }
});

module.exports = {
    verify: verifyCaptcha,
};
