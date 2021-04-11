const mongoose = require('mongoose');
const { Schema } = mongoose;
const participantSchema = require('./Participant');

const surveySchema = new Schema({
    name: String,
    participants: [participantSchema],
    dateUploaded: Date
});

mongoose.model('surveys', surveySchema);