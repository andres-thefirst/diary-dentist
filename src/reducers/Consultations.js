import {
  FETCH_GET_CONSULTATIONS
} from '../actions/Consultations';

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

const Consultations = {
  consultations
};

export default Consultations;
