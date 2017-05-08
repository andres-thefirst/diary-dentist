import Consultations from './Consultations';
import Appointments from './Appointments';
import { combineReducers } from 'redux';

let reducer = {};
reducer = Object.assign({}, reducer, Consultations);
reducer = Object.assign({}, reducer, Appointments);

const rootReducer = combineReducers(
  reducer
);

export default rootReducer;
