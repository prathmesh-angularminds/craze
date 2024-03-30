const passport = require('passport');
const ApiError = require('./../utils/apiError')
const httpStatus = require('http-status')

const verifyCallBack = (req, resolve, reject) => {

    return async (err, user, info) => {

        // If error or user not found
        if (err || info || !user) {
            return reject(new ApiError(httpStatus.UNAUTHORIZED,"Please authenticate"));
        }

        // If user is not active then throw an error
        if(!user.status === 'Active') {
            return reject(new ApiError(httpStatus.UNAUTHORIZED,"Seller is not active"))
        }

        // Include the found user in req object
        req.user = user;
        resolve()
    }
}

const auth = () => async (req, res, next) => {
    new Promise((resolve, reject) => {
        passport.authenticate(
            'jwt',
            { session: false },
            verifyCallBack(req,resolve,reject)
        )(req, res, next);
    })
    .then(() => next())
    .catch((err) => next(err))
}

module.exports = {
    auth
}