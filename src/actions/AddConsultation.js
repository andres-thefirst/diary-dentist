export const FETCH_GET_CONSULTATIONS = 'FETCH_GET_CONSULTATIONS';

function receiveConsultations(json) {
  return {
    type: FETCH_GET_CONSULTATIONS,
    consultations: json
  }
}

export function getConsultations(action) {
  console.log('getConsultations');
  return function(dispatch){
    return fetch(`http://localhost:3001/api/kindConsultations`)
        .then(response => response.json())
        .then(json =>

          // We can dispatch many times!
          // Here, we update the app state with the results of the API call.

          dispatch(receiveConsultations(json))
        );
  }
}
