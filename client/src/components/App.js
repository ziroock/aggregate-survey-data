import React, { Component } from 'react';

import UploadCSV from './UploadCSV';


class App extends Component {
    render() {
        return (
            <div id="App">
                Hello World!
                <UploadCSV />
            </div>
        );
    }
}

export default App;
