import React, {Component} from 'react';
import './AddAppointment.css';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class AddAppointment extends Component{

  constructor(props){
    super(props);
    this.kindConsultationList = props.kindConsultationList.map((option) => <MenuItem name='kindConsultationId' value={option.id} key={option.name} primaryText={option.name} />);
    let timeList = this.generateTimeArray(7,22);
    this.timeList = timeList.map((option) => <MenuItem name='time' value={option.id} key={option.name} primaryText={option.name}/>);
  }

  generateTimeArray = (from, to) => {
    let timeArray = []
    for(let i = from; i <= to ; i++) {
      timeArray.push({id: i, name: `${i}:00`});
    }
    return timeArray;
  }

  onSubmit = (event) => {
    event.preventDefault();
    console.log('sending data...', `${this.state.kindConsultation} ${this.state.time}`);
  }

  setData = () => {
    this.onSubmit = this.props.onSubmit.bind(this);
    this.handleChange = this.props.handleChange.bind(this);
    this.form = this.props.form;
  }

  render = () => {
    this.setData();
    return (
      <div>
        <form onSubmit={this.onSubmit}>
        <div>
          <SelectField floatingLabelText="Tipo de Consulta" value={this.form.kindConsultationId} name='kindConsultationId' onChange={this.handleChange('kindConsultationId')}>
            {this.kindConsultationList}
          </SelectField>
        </div>
        <div>
          <SelectField floatingLabelText="Horario" value={this.form.time} name='time' onChange={this.handleChange('time')}>
            {this.timeList}
          </SelectField>
        </div>
        <div>
          <TextField floatingLabelText='Paciente' hintText='Nombre' name='clientName' onChange={this.handleChange('clientName')}/>
        </div>
        <div>
          <RaisedButton label="Aceptar" primary={true} onClick={this.onSubmit}/>
        </div>
        </form>
      </div>);
  }
}

export default AddAppointment;
