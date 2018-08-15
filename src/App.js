import React, { Component } from 'react';
import Form from './components/Form';
import Weather from './components/Weather';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resul: [],
      city: "",
      country: "",
      API_KEY: "9da0d9188c36dbab1fe10996983ccdc6",
      showWeather:false
    }
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&appid=${this.state.API_KEY}&u
    nits=metric`).then(res => {
      this.setState({
        showWeather: true,
        resul: res.data
      })
    })
  }

  onChange(e){
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  
  componentDidMount(){
  
  }
  render() {
    return (
      <div className="container h-100">
        <Form city={this.state.city} country={this.state.country} onChange={this.onChange} onClick={this.onClick} />
        <hr/>  
        {
          this.state.showWeather?<Weather data={this.state.resul} />:null
        }      
      </div>
    );
  }
}

export default App;
