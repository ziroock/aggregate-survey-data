const csv = require('csvtojson');

module.exports = async function csvToJSON(csvFilePath) {
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