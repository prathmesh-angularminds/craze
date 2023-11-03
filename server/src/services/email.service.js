const nodeMailer = require('nodemailer')
require('dotenv').config()
const handlebars = require('handlebars');
const ApiError = require('../utils/apiError');
const { EmailTemplates } = require('../models')
const httpStatus = require('http-status');

// config


const sendMail = async (message) => {

    const transporter = nodeMailer.createTransport({
        service: 'gmail',
        port: 465,
        secure: true,
        secureConnection: false,
        auth: {
            user: 'prathuvibhute3110@gmail.com',
            pass: process.env.APP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    await transporter.sendMail({
        from: `"Craze team " <info@craze.com>`, // sender address
        to: message.to,                         // list of receivers
        subject: message.subject,               // Subject line
        text: message.text,                     // plain text body
        html: message.html,                     // html body
    });
}


const sendResetPasswordMail = async (headers, content, document) => {

    const message = {
        subject: "Reset password page link",
        text: content.text
    };

    const emailTemplate = await EmailTemplates.findOne({ _org: document._org, template: 'EMAIL_TEMPLATE' })

    try {
        
        if(headers || headers.to) {
            message.to = headers.to
        } else {
            throw new ApiError(`[SEND MAIL] :: check email headers`)
        }

        message['html'] = renderHml(emailTemplate.html,{
            sellerName: document.sellerName,
            link: `http://localhost:4200/seller/auth/reset-password/${document.sellerId}?token=${document.token}`
        })

        await sendMail(message);

    } catch(err) {
        throw new ApiError(httpStatus.NOT_FOUND,`[SEND MAIL] :: ` + err.message);
    }
}

const sendInviteUserMail = () => {

}

const renderHml = (template, data) => {

    try {

        const utilities = handlebars.compile(template);
        const emailHtml = utilities(data);
        return emailHtml
    } catch (err) {
        throw new ApiError(httpStatus.NOT_FOUND,`[SEND MAIL] :: No email template provided`)
    }
}


module.exports = {
    sendInviteUserMail,
    sendResetPasswordMail
}