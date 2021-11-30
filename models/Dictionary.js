const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dictionarySchema = new Schema({
    word: {
        type: String,
        required: true
    },
    translation: {
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('dictionary', dictionarySchema);