import React, { Component } from 'react';
import './App.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer';
import AddAppointment from './containers/appointment/AddAppointment';
import thunkMiddleware from 'redux-thunk';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(rootReducer, applyMiddleware(
    thunkMiddleware // lets us dispatch() functions
  ));

class App extends Component {

  render() {

    const kindConsultationList= ['Brackets', 'Odontologia', 'Sacada de Muela', 'Limpieza bucal'].map((item, index) => ({ id:index, name:item }));

    return (
      <div className="App">
        <MuiThemeProvider>
          <Provider store={store}>
            <AddAppointment kindConsultationList={kindConsultationList}/>
          </Provider>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
