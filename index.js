const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/Survey');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
});

const app = express();
app.use(express.json());

require('./routes/surveyRoutes')(app);

const PORT = 5000;
app.listen(PORT);