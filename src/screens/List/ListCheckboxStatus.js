import React, { Component } from 'react';

import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";

class ListCheckboxStatus extends React.Component {
  constructor(){
    super();
    this.state={
      status:[]
    }

    this.onAddItemStatus = this.onAddItemStatus.bind(this);
    this.onDeleteItemStatus = this.onDeleteItemStatus.bind(this);
  }

  onAddItemStatus(item){
    this.setState({
      status: [...this.state.status, item]
    })
  }

  onDeleteItemStatus(item){
    if(this.state.status != undefined ){
    let tmp = this.state.status;
    tmp.splice(tmp.indexOf(item))
    this.setState({
      status: tmp
    })
  }
  }

  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
          <li>
            <Checkbox name={item} onAddItemStatus={this.onAddItemStatus}
                                  onDeleteItemStatus={this.onDeleteItemStatus}>
              {item}
            </Checkbox>
         </li>
          ))}
      </ul>
    );
  }
}

export default ListCheckboxStatus;
