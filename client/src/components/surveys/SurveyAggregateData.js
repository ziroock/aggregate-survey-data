import React, { Component } from 'react';
import axios from 'axios';
import SurveyTable from './SurveyTable';

//#16A487 -

//#455B72 - background ?

//#426175

//#4169877

//#2C3E50 - survey cards

class SurveyAggregateData extends Component {
    constructor(props) {
        super(props);
        this.state = {surveyResults: {}}
    }

    componentDidMount() {
        axios.post("/api/getAggregateSurvey", {surveyId: this.props.match.params.surveyId}, {
        }).then(res => {
            this.setState({surveyResults: res.data});
        })
    }

    renderAggregateDataTables() {
        let questionResults = this.state.surveyResults;
        if(questionResults) {
            return Object.keys(questionResults).map( question => {
                return (<SurveyTable key={question} title={question} rowsData={questionResults[question]}/>)
            });
        }
        return null;
    }

    render() {
        // console.log(this.props.match.params.surveyId);
        return (
            <React.Fragment>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-evenly',
                    background: '#2C3E50',
                    position: 'relative',
                }}>
                    {this.renderAggregateDataTables()}
                </div>
                <div className={'container'} style={{
                    background: '#2C3E50',
                    position: 'fixed',
                    height: '100vh',
                    width: '100%'
                }}/>
            </React.Fragment>
        );
    }
}

export default SurveyAggregateData;