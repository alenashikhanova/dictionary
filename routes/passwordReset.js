const express = require('express');
const router = express.Router();
const controller = require('../controllers/resetPassword');

router.post('/', controller.sendMail);
router.post('/:userId/:token', controller.resetPassword);

module.exports = router;