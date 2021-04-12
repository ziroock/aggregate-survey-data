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
            margin: '30px'
        }}>
            <table>
                <div style={{
                    background: 'rgba(0,0,0, 0.2)',
                    padding: '10px',
                    borderRadius: '10px'
                }}>
                    {title}
                </div>
                <tbody>
                    {generateAnswers()}
                </tbody>

            </table>
        </div>
    );
};

export default SurveyTable;