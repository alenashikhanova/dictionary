const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');
const sendEmail = require("../utils/sendEmail");
const authController = require('../controllers/auth');

module.exports.sendMail = async function(req, res) {

    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(400).send("User with given email doesn't exist");
        }

        let token = jwt.sign({
            email: user.email,
            userId: user._id
        }, keys.jwt, { expiresIn: 86400 });

        const link = `${process.env.BASE_URL}/reset-password/${user._id}/${token}`;
        await sendEmail(user.email, "Password reset", link, res);

        res.status(200).json({
            success: true,
            message: 'Password reset link sent to your email account'
        });
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports.resetPassword = async function(req, res) {

    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(400).send("invalid link or expired");

        try {
            user.password = authController.getPassword(req.body.password);
            await user.save();

            res.status(201).json({
                message: 'Password reset sucessfully'
            });
        } catch (err) {
            res.status(400).send("Invalid link or expired");
        }

    } catch (error) {
        errorHandler(res, error);
    }
}