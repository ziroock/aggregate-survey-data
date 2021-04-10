const mongoose = require('mongoose');
const { Schema } = mongoose;

const participantSchema = new Schema({
    userID: Number,
    questions: [{question: String, answer: String}]
});

module.exports = participantSchema;