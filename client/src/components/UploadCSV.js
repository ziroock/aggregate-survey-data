import React, { Component } from 'react';
import axios from 'axios';

class UploadCSV extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }

    onChangeHandler = (event) =>{
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        axios.post("/api/postSurvey", data, {
            // receive two    parameter endpoint url ,form data
        }).then(res => { // then print response status
            console.log(res)
        })
    }
    render() {
        console.log('bate: ', this.state.selectedFile);
        return (
            <div style={{
                background: 'skyblue',
                width: 'auto',
                height: '100px',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input type="file" name="file" onChange={this.onChangeHandler}
                       style={{marginLeft: '20px', marginTop: '10px'}}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                </button>
            </div>
        )
    }
}

export default UploadCSV;