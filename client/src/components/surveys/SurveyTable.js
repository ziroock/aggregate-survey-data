import React from 'react';

const SurveyTable = ({title, rowsData}) => {
    let generateAnswers = () => {
        return Object.keys(rowsData).map( answer => {
            return (
                <tr key={answer}>
                    <td>{answer}</td>
                    <td>{rowsData[answer]}</td>
                </tr>
            );
        });
    };

    return(
        <table>
            <thead>
                <tr>{title}</tr>
                {generateAnswers()}
            </thead>

        </table>
    );
};

export default SurveyTable;