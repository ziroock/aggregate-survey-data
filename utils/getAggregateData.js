module.exports = function getAggregateData(surveyData) {
    let surveyAggregateData = {};

    surveyData.forEach(participantData => {
        participantData.forEach(questionData => {
            const question = questionData.question;
            const answer = questionData.answer;
            if(question in surveyAggregateData){
                if(answer in surveyAggregateData[question]){
                    surveyAggregateData[question][answer] += 1;
                } else {
                    surveyAggregateData[question][answer] = 1;
                }
            } else {
                surveyAggregateData[question] = {};
                surveyAggregateData[question][answer] = 1;
            }
        })
    })

    return surveyAggregateData;
};


//
// [
//     [
//         {
//             _id: 60723e165c290d417a80ec13,
//             question: 'Favorite Animal?',
//             answer: 'dog'
//         },
//         {
//             _id: 60723e165c290d417a80ec14,
//             question: 'Least Favorite Animal?',
//             answer: 'cat'
//         }
//     ],
//     [
//         {
//             _id: 60723e165c290d417a80ec16,
//             question: 'Favorite Animal?',
//             answer: 'owl'
//         },
//         {
//             _id: 60723e165c290d417a80ec17,
//             question: 'Least Favorite Animal?',
//             answer: 'rat'
//         }
//     ],
//     [
//         {
//             _id: 60723e165c290d417a80ec19,
//             question: 'Favorite Animal?',
//             answer: 'dog'
//         },
//         {
//             _id: 60723e165c290d417a80ec1a,
//             question: 'Least Favorite Animal?',
//             answer: 'rat'
//         }
//     ]
// ]
