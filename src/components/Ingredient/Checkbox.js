import React, { Component } from 'react';

class Checkbox extends Component {
  constructor(props){
    super(props);

    let checked = false;
    let textDecoration = 'none'
    if(props.isChecked != undefined &
      props.isChecked === true){
      console.log("Checked");
      checked = props.isChecked;
      textDecoration = 'line-through';
    }
    this.state = {
      checked : checked,
      style:{
        'textDecoration': textDecoration
      }
    }
    this.handleChange = this.handleChange.bind(this);

  }

  componentWillReceiveProps({isChecked}) {
    if (isChecked != this.state.checked){
    this.setState({
      ...this.state,
      checked: isChecked,
      style:{
        'textDecoration':
         isChecked ? 'line-through' : 'none',
       },
      })
    }
  }
  handleChange(){
    console.log("checked");
       if(this.props.onAddItem != undefined &
        this.props.onDeleteItem != undefined)
       if(!this.state.checked ){
    this.props.onAddItem(this.props.name)}
    else {this.props.onDeleteItem(this.props.name)}

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
            <input checked={this.state.checked} type="checkbox" name={this.props.name} onClick={this.handleChange} />
              {this.props.children}
          </label>
        );
    }
}

export default Checkbox;
