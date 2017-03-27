import { combineReducers } from 'redux';
import {
  FETCH_GET_CONSULTATIONS
} from '../actions/AddConsultation';

function consultations(state = [], action) {
    let result = {};
    switch (action.type) {
      case FETCH_GET_CONSULTATIONS:
        result = action.consultations;
        break;
      default:
        result = state;
    }
    return result;
}

const rootReducer = combineReducers({
  consultations
});

export default rootReducer;
