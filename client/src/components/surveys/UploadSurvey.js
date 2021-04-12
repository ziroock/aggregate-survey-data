import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postSurvey } from '../../actions';


class UploadSurvey extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }

    onChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        this.props.postSurvey(data);
        this.setState({selectedFile: null});
    }


    render() {
        let fileString = ''
        if (this.state.selectedFile) {
            fileString = 'Selected File: ' + this.state.selectedFile.name
        }
        return (
            <div style={{

                background: '#2C3E50',
                width: 'auto',
                height: '130px',
                borderRadius: '3px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                marginBottom: '30px'
            }}>
                <label htmlFor={'selectCSVInput'} className={'btn waves-effect' } style={{ margin: '0 30px', background: '#16A487'}}> SELECT CSV SURVEY FILE </label>
                <input type="file" name="file" onChange={this.onChangeHandler} id={'selectCSVInput'}
                       style={{display: 'none'}}/>
                <label id={'fileString'} style={{textAlign: 'center', color: 'white', fontSize: '15px'}}>{fileString}</label>
                <button type="button" className="btn" style={{ margin: '0 30px'}} onClick={this.onClickHandler}>Upload
                </button>
            </div>
        )
    }
}

export default connect(null, {postSurvey})(UploadSurvey);