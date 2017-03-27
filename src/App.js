import React, { Component } from 'react';
import AddAppointment from './AddAppointment';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/AdConsultation';
import ConsultationsComponent from './containers/Consultations';
import thunkMiddleware from 'redux-thunk';

let store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ));

class App extends Component {

  render() {

    const kindConsultationList= ['Brackets', 'Odontologia', 'Sacada de Muela', 'Limpieza bucal'].map((item, index) => ({ id:index, name:item }));

    return (
      <div className="App">
        <AddAppointment kindConsultationList={kindConsultationList}/>
        <Provider store={store}>
          <ConsultationsComponent />
        </Provider>
      </div>
    );
  }
}

export default App;
