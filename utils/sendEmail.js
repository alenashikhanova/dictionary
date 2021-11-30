const nodemailer = require('nodemailer');
const template = require('./reset-password-letter-template');

const sendEmail = async(email, subject, link, res) => {

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: subject,
            html: template.emailTemplate(link),
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message ? error.message : error
        });
    }
};

module.exports = sendEmail;