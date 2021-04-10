const express = require('express');
const multer = require('multer');
const csv = require('csvtojson');

let upload = multer({ dest: 'uploads/' });

const app = express();
app.use(express.json());


function csvToJSON(csvFilePath) {

}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/postSurvey', upload.single('file'), async (req, res) => {
    // console.log(req);
    let csvFile = req.file;
    console.log(csvFile);

    res.send('It worked');
});




const PORT = 5000;
app.listen(PORT);