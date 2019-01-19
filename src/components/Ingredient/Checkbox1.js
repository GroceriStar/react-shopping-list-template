import React, { Component } from 'react';

class Checkbox1 extends React.Component {
  constructor(){
    super();
    this.state = {
      checked : false,
      style:{
        'textDecoration': 'none'
      }
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(){
  this.props.onAddItemStatus(this.props.name)
    this.setState({
      checked: !this.state.checked,
      style:{
        'textDecoration':
         !this.state.checked ? 'line-through' : 'none',
       },
         })
         console.log(this.state);
  }

    render() {
        return (
          <label style={this.state.style}>
            <input type="checkbox" onClick ={this.handleChange} />
              {this.props.name}
          </label>
        );
    }
}

export default Checkbox1;
