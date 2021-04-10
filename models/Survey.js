const mongoose = require('mongoose');
const { Schema } = mongoose;
const participantSchema = require('./Participant');

const surveyCSVSchema = new Schema({
    name: String,
    participants: [participantSchema],
    dateUploaded: Date
});

mongoose.model('surveysCSV', surveyCSVSchema);