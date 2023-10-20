const nodeMailer = require('nodemailer')
require('dotenv').config()

// config


const sendMail = async () => {

    const transporter = nodeMailer.createTransport({
        // host: "smtp.ethereal.email",
        service: 'gmail',
        port: 465,
        secure: true,
        secureConnection: false,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: 'prathuvibhute3110@gmail.com',
            pass: process.env.APP_PASSWORD,
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    console.log("Hello");

    const info = await transporter.sendMail({
        from: `"Fred Foo 👻" <${process.env.ETHEREAL_EMAIL}>`, // sender address
        to: "demo@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Information: ",info)
}


const sendResetPasswordMail = async () => {

    console.log("Hello")
    try {

        await sendMail();
    } catch(err) {
        console.log("Err: ",err);
    }
}

const sendInviteUserMail = () => {

    sendMail();
}


module.exports = {
    sendInviteUserMail,
    sendResetPasswordMail
}