import { combineReducers } from 'redux';
import surveysReducer from './surveysReducer';


export default combineReducers({
    surveys: surveysReducer
});