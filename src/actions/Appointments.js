export const FETCH_ADD_APPOINTMENT = 'FETCH_ADD_APPOINTMENT';
export const ADD_FORM_FIELD = 'ADD_FORM_FIELD';

export function addConsultation(data) {
  return function (dispatch, getState){
    return fetch('http://localhost:3001/api/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(getState().fields)
    }).then(response => response.json())
    .then(json =>
      dispatch(resultAddConsultation(json))
    );
  }
}

function resultAddConsultation(json) {
  return {
    type: FETCH_ADD_APPOINTMENT,
    result: json
  }
}

export function addFormField(field) {
  return {
    type: ADD_FORM_FIELD,
    field: field
  }
}
