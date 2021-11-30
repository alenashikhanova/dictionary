const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const keys = require('../config/keys');
const errorHandler = require('../utils/errorHandler');

module.exports.login = async function(req, res) {

    if (req.body.email) {

        const candidateEmail = req.body.email.toLowerCase().trim();
        const candidate = await User.findOne({ email: candidateEmail });

        if (candidate) {

            const isPasswordsMatch = bcrypt.compareSync(req.body.password, candidate.password);

            if (isPasswordsMatch) {

                res.status(200).json({
                    token: getToken(candidate),
                    message: 'Success'
                });

            } else {
                res.status(401).json({
                    message: 'Passwords are not match'
                });
            }

        } else {
            res.status(404).json({
                message: 'This email was not found'
            });
        }
    } else {
        res.status(404).json({
            message: 'Email is required'
        });
    }
}

module.exports.register = async function(req, res) {

    if (req.body.email) {

        const candidateEmail = req.body.email.toLowerCase().trim();
        const candidate = await User.findOne({ email: candidateEmail });

        if (candidate) {
            res.status(409).json({
                message: 'This email is already registered'
            });
        } else {
            let user = createUser(req.body);

            try {
                await user.save();
                const token = getToken(user);
                user = {...user._doc, token };

                res.status(201).json(user);

            } catch (error) {
                errorHandler(res, error);
            }
        }
    } else {
        res.status(404).json({
            message: 'Email is required'
        });
    }
}

module.exports.googleAuth = async function(req, res) {
    if (req.body.email) {

        const candidate = await User.findOne({ googleId: req.body.googleId });

        if (candidate) {
            res.status(200).json({
                token: getToken(candidate),
                message: 'Success'
            });

        } else {

            let user = createUserWithGoogle(req.body);

            try {
                await user.save();
                const token = getToken(user);

                user = (user._doc) ? {...user._doc, token } : {...user, token };

                res.status(201).json(user);

            } catch (error) {
                errorHandler(res, error);
            }
        }
    } else {
        res.status(404).json({
            message: 'Email is required'
        });
    }
}

module.exports.getPassword = password => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

const getToken = candidate => {
    return token = 'Bearer ' + jwt.sign({
        email: candidate.email,
        userId: candidate._id
    }, keys.jwt, { expiresIn: 86400 });
}

const createUser = newUser => {
    return user = new User({
        email: newUser.email.toLowerCase().trim(),
        password: this.getPassword(newUser.password),
        username: newUser.username
    });
}

const createUserWithGoogle = newUser => {
    return user = new User({
        email: newUser.email.toLowerCase().trim(),
        username: newUser.username,
        googleId: newUser.googleId,
    });
}