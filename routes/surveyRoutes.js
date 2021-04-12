const mongoose = require('mongoose');
const multer = require('multer');
const fs =  require('fs');
let upload = multer({ dest: 'tempCSV/' });
let csvToJSON = require('../utils/csvToJSON');
let getAggregateData = require('../utils/getAggregateData');

const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/postSurvey', upload.single('file'), async (req, res) => {
        const csvFile = req.file;
        const filePath = csvFile.destination + csvFile.filename;
        const fileName = csvFile.originalname;
        let jsonObject = await csvToJSON(filePath);
        console.log(csvFile);

        const survey = new Survey({
            name: fileName,
            participants: jsonObject.map((obj) => ({
                userID: obj.userId,
                questions: obj.questions
            })),
            dateUploaded: Date.now()
        });
        try {
            await survey.save();

            // On success delete file from local storage
            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error('There was an error: ', err.message);
                }
                console.log('Successfully deleted ' + filePath);
            });
        } catch (err) {
            // Error 424 unprocessable entity aka something is wrong with the data you sent us
            console.log('There was a problem creating the survey: ', err.message);
        }
        try{
            const surveysList = await Survey.find({}, {participants: 0});
            res.send(surveysList);
        } catch(err) {
            console.log("There was a problem retrieving the surveys from DB: ", err.message)
            res.send({});
        }
    });

    app.post('/api/deleteSurvey', async (req, res) => {
        console.log(req.body);
        try{
            await Survey.deleteOne({ _id: req.body._id});
            console.log("Successfully deleted Survey!");
        } catch (err) {
            console.log("There was a problem deleting the survey: ", err.message);
        }
        try{
            const surveysList = await Survey.find({}, {participants: 0});
            res.send(surveysList);
        } catch(err) {
            console.log("There was a problem retrieving the surveys from DB: ", err.message)
            res.send({});
        }
    });

    app.get('/api/getSurveys', async (req, res) => {
        try{
            const surveysList = await Survey.find({}, {participants: 0});
            res.send(surveysList);
        } catch(err) {
            console.log("There was a problem retrieving the surveys from DB: ", err.message)
            res.send({});
        }
    });

    app.post('/api/getAggregateSurvey', async (req, res) => {

        try{
            const survey = await Survey.find({ _id: req.body.surveyId});
            const questions = survey[0].participants.map( ({questions}) => {
                return questions;
            })
            const aggregateData = getAggregateData(questions);
            // console.log(aggregateData);
            // aggregateData.map(question => {
            //     console.log(question)
            // })
            res.send(aggregateData);
        } catch(err) {
            res.send({});
            console.log("There was an error in getting the aggregateData: ", err.message);
        }
    });


}
