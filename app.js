require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authRoutes = require('./routes/auth');
const passwordReset = require("./routes/passwordReset");
const dictionaryRoutes = require('./routes/dictionary');
const keys = require('./config/keys');
const app = express();

mongoose.set('useFindAndModify', false);
mongoose.connect(keys.mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => console.log('MongoDB is connected'))
    .catch(error => console.log(error));

app.use(passport.initialize());
require('./middleware/passport')(passport);


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use("/api/password-reset", passwordReset);
app.use('/api/dictionary', dictionaryRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('front-end/www'));

    app.get('*', (req, res) => {
        res.sendFile(
            path.resolve(
                __dirname, frontendPath, 'front-end', 'www', 'index.html'
            )
        )
    });
}

module.exports = app;