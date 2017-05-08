import {
  FETCH_ADD_APPOINTMENT,
  ADD_FORM_FIELD
} from '../actions/Appointments';

function appoitments(state = [], action) {
    let result = {};
    switch (action.type) {
      case FETCH_ADD_APPOINTMENT:
        result = action.result;
        break;
      default:
        result = state;
    }
    return result;
}

function fields(state = {}, action) {
  let result = {};
  switch (action.type) {
    case ADD_FORM_FIELD:
      result = Object.assign({}, state, action.field);
      break;
    default:
      result = state;
  }
  return result;
}

const Appointments = {
  appoitments,
  fields
};

export default Appointments;
