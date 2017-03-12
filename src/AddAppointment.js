import React, {Component} from 'react';
import './AddAppointment.css';

class AddAppointment extends Component{

  constructor(props){
    super(props);
    this.kindConsultationList = props.kindConsultationList.map((option) => <option value={option.id} key={option.name}>{option.name}</option>);

    let timeList = this.generateTimeArray(7,22);

    this.timeList = timeList.map((option) => <option value={option.id} key={option.name}>{option.name}</option>);
    this.state = { kindConsultation: props.kindConsultationList[0].id, time: timeList[0].id};
  }

  generateTimeArray = (from, to) => {
    let timeArray = []
    for(let i = from; i <= to ; i++) {
      timeArray.push({id: i, name: `${i}:00`});
    }
    return timeArray;
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('sending data...', `${this.state.kindConsultation} ${this.state.time}`);
  }

  render = () => (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Tipo de Consulta:
            <select name='kindConsultation' onChange={this.handleChange}>
              {this.kindConsultationList}
            </select>
          </label>
          <label>Horario:
            <select name='time' onChange={this.handleChange}>
              {this.timeList}
            </select>
          </label>
          <input type='submit' value='Aceptar' />
        </form>
      </div>
  );
}

export default AddAppointment;
