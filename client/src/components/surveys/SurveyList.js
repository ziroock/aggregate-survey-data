import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSurveys } from '../../actions';

//#16A487 -

//#455B72 - background ?

//2C3E50 - survey cards

class SurveyList extends Component {
    componentDidMount() {
        this.props.getSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card blue darken-3" key={survey._id}>
                    <div className="card-content white-text">
                        <Link to={`/survey/${survey._id}`}><span className="card-title">{survey.name}</span></Link>
                        <p className="right">
                            Sent On: {new Date(survey.dateUploaded).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys };
}

export default connect(mapStateToProps, { getSurveys })(SurveyList);