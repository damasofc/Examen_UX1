import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="row h-100 justify-content-center align-items-center">
        <form class="form-inline">
          <div class="form-group mb-2">
            <input type="text" name="city" class="form-control" id="staticEmail2" value={this.props.city} onChange={this.props.onChange} placeholder="Ciudad"  />
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <input type="text" name="country" class="form-control" id="inputPassword2" value={this.props.country} onChange={this.props.onChange} placeholder="Pais"/>
          </div>
          <button type="button" onClick={this.props.onClick} class="btn btn-primary mb-2">Obtener Clima</button>
        </form>
      </div>
    );
  }
}

export default Form;
