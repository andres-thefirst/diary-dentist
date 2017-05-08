import React, { Component } from 'react'

class Consultations extends Component{

  setData() {
    this.consultations =  this.props.consultations.map((item) => <li key={item.id}>{item.name}</li>);
    this.onClick = this.props.onClick;
  }

  render = () => {
    this.setData();
    return (<div>
      <button onClick={this.onClick}>Fetch</button>
      <ul>
        {this.consultations}
      </ul>
    </div>);
  };
}

export default Consultations;
