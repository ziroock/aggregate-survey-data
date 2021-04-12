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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });

}

const PORT = process.env.PORT || 5000;
app.listen(PORT);