import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Dashboard from './Dashboard';
import Header from './Header';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div className={'container'}>
                    <Route exact path={'/'} component={Dashboard}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);