import React, { Component } from 'react';
import AddAppointment from './AddAppointment';
import './App.css';

class App extends Component {

  render() {

    const kindConsultationList= ['Brackets', 'Odontologia', 'Sacada de Muela', 'Limpieza bucal'].map((item, index) => ({ id:index, name:item }));

    return (
      <div className="App">
        <AddAppointment kindConsultationList={kindConsultationList}/>
      </div>
    );
  }
}

export default App;
