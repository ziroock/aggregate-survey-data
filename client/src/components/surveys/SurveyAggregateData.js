import React, { Component } from 'react';
import axios from 'axios';
import SurveyTable from './SurveyTable';

//#16A487 -

//#455B72 - background ?

//2C3E50 - survey cards

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
            console.log(questionResults);
            return Object.keys(questionResults).map( question => {
                return (<SurveyTable key={question} title={question} rowsData={questionResults[question]}/>)
            });
        }
        return null;
    }

    render() {
        // console.log(this.props.match.params.surveyId);
        return (
            <React.Fragment >
                {this.renderAggregateDataTables()}
            </React.Fragment>
        );
    }
}

export default SurveyAggregateData;