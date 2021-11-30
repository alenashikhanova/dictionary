const express = require('express');
const passport = require('passport');
const controller = require('../controllers/auth');
const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.post('/google-auth', controller.googleAuth);
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), controller.googleAuth);

module.exports = router;