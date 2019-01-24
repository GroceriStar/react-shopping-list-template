import React, { Component } from 'react';

import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";

class ListCheckboxStatus extends React.Component {
  constructor(){
    super();
    this.state={
      status:[]
    }

    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  onAddItem(item){
    this.setState({
      status: [...this.state.status, item]
    })
  }

  onDeleteItem(item){
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
          <li id={shortid.generate()}>
            <Checkbox name={item} onAddItem={this.onAddItem}
                                  onDeleteItem={this.onDeleteItem}>
              {item}
            </Checkbox>
         </li>
          ))}
      </ul>
    );
  }
}

export default ListCheckboxStatus;
