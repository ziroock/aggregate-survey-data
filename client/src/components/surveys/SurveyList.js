import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSurveys, deleteSurvey } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.getSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card" key={survey._id} style={{background: '#426175'}}>
                    <div className="card-content white-text">
                        <button className=" waves-effect right btn" onClick={() => this.props.deleteSurvey({_id: survey._id})}>
                            Delete
                        </button>
                        <Link to={`/survey/${survey._id}`}><span className="card-title white-text">{survey.name}</span></Link>
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

export default connect(mapStateToProps, { getSurveys, deleteSurvey })(SurveyList);