import React, { Component } from 'react';

class Checkbox extends Component {
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
    console.log("checked");
       if(this.props.onAddItemStatus != undefined &
        this.props.onDeleteItemStatus != undefined)
       if(!this.state.checked ){
    this.props.onAddItemStatus(this.props.name)}
    else {this.props.onDeleteItemStatus(this.props.name)}

    this.setState({
      checked: !this.state.checked,
      style:{
        'textDecoration':
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
