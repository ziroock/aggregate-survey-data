const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');

let upload = multer({ dest: 'tempCSV/' });

const app = express();
app.use(express.json());


async function csvToJSON(csvFilePath) {
    let jsonObj = await csv().fromFile(csvFilePath);

    //Get object ready for DB
    jsonObj.map( (object) => {
        let questions = [];
        Object.keys(object).forEach((key) => {
            if(key !== 'userId') {
                // console.log('Key : ' + key + ', Value : ' + object[key]);
                questions.push({question: key, answer: object[key]});
                delete object[key];
            }
        });
        object['questions'] = questions;
    });
    return jsonObj;
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/postSurvey', upload.single('file'), async (req, res) => {
    const csvFile = req.file;
    const filePath = csvFile.destination + csvFile.filename;
    let jsonObject = await csvToJSON(filePath);

    jsonObject.map( (object) => {
        console.log(object.userId);
        console.log(object.questions);
    });
    // console.log(jsonObject);

    res.send('It worked');
});




const PORT = 5000;
app.listen(PORT);