require('dotenv').config();
const Dictionary = require('../models/Dictionary');
const errorHandler = require('../utils/errorHandler');
const { Translate } = require('@google-cloud/translate').v2;

const translate = new Translate({
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
});

module.exports.addWord = async function(req, res) {

    let word = req.body.word;
    let newWord;

    if (word) {

        word = word.toLowerCase().trim();
        const lang = await translate.detect(word);
        const target = (lang[0].language === 'en') ? 'ru' : 'en';
        let translation = await translate.translate(word, target);
        translation = translation[0];

        if (lang[0].language === 'ru') {
            [word, translation] = [translation, word];
        }

        const exist = await Dictionary.findOne({ word: word, user: req.user.id });

        try {

            if (!exist) {
                newWord = new Dictionary({
                    word: word,
                    translation: translation,
                    user: req.user.id,
                });

                await newWord.save();
            } else {
                errorHandler(res, 'This word is already in the dictionary');
            }

            res.status(200).json(newWord);

        } catch (error) {
            errorHandler(res, error);
        }
    }

}

module.exports.getAll = async function(req, res) {

    try {
        const words = await Dictionary.find({ user: req.user.id });

        res.status(200).json(words);

    } catch (error) {

        errorHandler(res, error);
    }
}


module.exports.deleteWord = async function(req, res) {

    try {
        await Dictionary.deleteOne({ _id: req.params.id });

        res.status(200).json(req.params.id);
    } catch (error) {
        errorHandler(res, error);
    }

}