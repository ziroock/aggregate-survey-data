import React, { Component } from 'react';

//#16A487 -

//#455B72 - background ?

//2C3E50 - survey cards

class SurveyAggregateData extends Component {
    render() {
        console.log(this.props.match.params.surveyId);
        return (
            <div >
                Aggregate data for surveyId: {this.props.match.params.surveyId }
            </div>
        );
    }
}

export default SurveyAggregateData;