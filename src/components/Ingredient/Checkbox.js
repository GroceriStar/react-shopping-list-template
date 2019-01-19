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
  // changeState(){
  //   console.log("Change State");
  //   this.setState({
  //     checked: !this.state.checked,
  //     style:{
  //       'textDecoration':
  //        !this.state.checked ? 'line-through' : 'none',
  //      },
  //        })
  // }

  handleChange(){
    console.log("checked");
     if(this.props.onAddItemStatus1 != undefined ){
    this.props.onAddItemStatus1(this.props.name)
    console.log("sent data to parent");
    }

    this.setState({
      checked: !this.state.checked,
      style:{
        'textDecoration':
         !this.state.checked ? 'line-through' : 'none',
       },
         })
         console.log(this.state);
      //    if(this.props.onAddItemStatus != undefined &
      //     this.props.onDeleteItemStatus != undefined)
      //    if(!this.state.checked ){
      // this.props.onAddItemStatus(this.props.name)}
      // else {this.props.onDeleteItemStatus(this.props.name)}
      this.changeStatus();
      console.log(this.state);
  }
  changeStatus(){
       // if(this.props.onAddItemStatus != undefined &
       //  this.props.onDeleteItemStatus != undefined)
       // if(!this.state.checked ){

  // }
  //   else {this.props.onDeleteItemStatus(this.props.name)}
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
