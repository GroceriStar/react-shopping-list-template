import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked : false,
      style:{
        'text-decoration': 'none'
      }
    }
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(){
    console.log("checked");
    this.setState({
      checked: !this.state.checked,
      style:{
        'text-decoration':
         !this.state.checked ? 'line-through' : 'none',
       },

         })
  }

    render() {
        return (
          <label style={this.state.style}>
            <input type="checkbox" name={this.props.name} onClick={this.handleChange} />
              {this.props.children}
          </label>
        );
    }
}

export default Checkbox;
