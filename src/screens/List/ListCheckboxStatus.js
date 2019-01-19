import React, { Component } from 'react';

import Checkbox1 from "../../components/Ingredient/Checkbox1";
import shortid from "shortid";

class ListCheckboxStatus extends React.Component {
  constructor(){
    super();
    this.state={
      status:[]
    }
    // this.updateCheckbox = React.createRef();
    this.onAddItemStatus = this.onAddItemStatus.bind(this);
    // this.onDeleteItemStatus = this.onDeleteItemStatus.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
  }

  updateStatus(data){
    this.setState({
      status:["One"]
    })
    console.log("state  in List " + this.state.status);
  }
  onAddItemStatus(item){
    console.log("Add item " + item);
    this.setState({
      status: [...this.state.status, item]
    })
    console.log(this.state.status);
    // this.updateCheckbox.current.changeState();
  }

  // onDeleteItemStatus(item){
  //   let tmp = this.state.status;
  //   tmp.splice(tmp.indexOf(item))
  //   console.log("Delete item");
  //   this.setState({
  //     status: tmp
  //   })
  // }
  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
          <li key={shortid.generate()}
              id={shortid.generate()}>
            <Checkbox1 name={item} onAddItemStatus={this.onAddItemStatus}
                                  // onDeleteItemStatus={this.onDeleteItemStatus}
                                  // ref={this.updateCheckbox}
                              />

          </li>
          ))}
      </ul>
    );
  }
}

export default ListCheckboxStatus;
