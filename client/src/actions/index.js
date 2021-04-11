import axios from 'axios';
import {FETCH_SURVEYS} from './types';

export const getSurveys = () => {
    return async dispatch => {
        const res = await axios.get('/api/getSurveys' );

        dispatch({ type: FETCH_SURVEYS, payload: res.data});
    };
};

export const postSurvey = (surveyData) => {
    return async dispatch => {
        const res = await axios.post('/api/postSurvey', surveyData );

        dispatch({ type: FETCH_SURVEYS, payload: res.data});
    };
};

export const deleteSurvey = (surveyID) => {
    return async dispatch => {
        const res = await axios.post('/api/deleteSurvey', surveyID);

        dispatch({ type: FETCH_SURVEYS, payload: res.data});
    };
};