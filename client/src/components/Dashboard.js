import React from 'react';
import UploadSurvey from './surveys/UploadSurvey';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return(
        <React.Fragment>
            <UploadSurvey />
            <SurveyList />
        </React.Fragment>
    );
};

export default Dashboard;