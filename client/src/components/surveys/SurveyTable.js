import React from 'react';

const SurveyTable = ({title, rowsData}) => {
    let generateAnswers = () => {
        return Object.keys(rowsData).sort((first, second) => {
            return rowsData[second] - rowsData[first]
        }).map( (answer, index) => {
            return (
                <tr key={answer}>
                    <td>{index + 1}</td>
                    <td>{answer}</td>
                    <td>{rowsData[answer]}</td>
                </tr>
            );
        });
    };

    return(
        <div style={{
            marginBottom: '50px',
            maxWidth: '350px',
            background: '#426175',
            color: 'white',
            paddingLeft: '20px',
            paddingRight: '10px',
            paddingTop: '20px',
            paddingBottom: '20px',
            borderRadius: '3px',
            margin: '30px',
            flexBasis: '100%'
        }}>
            <div style={{
                background: 'rgba(0,0,0, 0.2)',
                padding: '10px',
                borderRadius: '10px'
            }}>
                {title}
            </div>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Answer</td>
                        <td>Votes</td>
                    </tr>
                </thead>
                <tbody>
                    {generateAnswers()}
                </tbody>

            </table>
        </div>
    );
};

export default SurveyTable;