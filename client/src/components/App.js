import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import Header from './Header';
import SurveyAggregateData from './surveys/SurveyAggregateData';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className={'container'} style={{marginTop: '100px'}}>
                    <Route exact path={'/'} component={Dashboard}/>
                    <Route path={'/survey/:surveyId'} component={SurveyAggregateData}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);