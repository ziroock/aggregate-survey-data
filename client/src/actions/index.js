import axios from 'axios';
import {FETCH_SURVEYS} from './types';

export const getSurveys = () => {
    return async dispatch => {
        const res = await axios.get('/api/getSurveys' );

        dispatch({ type: FETCH_SURVEYS, payload: res.data});
    };
};