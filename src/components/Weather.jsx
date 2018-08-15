import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount(){
        console.log(this.props.data);
    }
  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col">Ubicacion:</div>
            <div className="col">{this.props.data.name}, {this.props.data.sys.country}</div>
        </div>
        <div className="row">
            <div className="col">Temperatura</div>
            <div className="col">{this.props.data.main.temp}</div>
        </div>
        <div className="row">
            <div className="col">Humedad</div>
            <div className="col">{this.props.data.main.humidity}%</div>
        </div>
      </div>
    );
  }
}

export default Form;
