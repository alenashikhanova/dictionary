const express = require('express');
const passport = require('passport');
const controller = require('../controllers/dictionary');
const router = express.Router();

router.post('/add-word', passport.authenticate('jwt', { session: false }), controller.addWord);
router.get('/', passport.authenticate('jwt', { session: false }), controller.getAll);
router.delete('/:id', passport.authenticate('jwt', { session: false }), controller.deleteWord);

module.exports = router;