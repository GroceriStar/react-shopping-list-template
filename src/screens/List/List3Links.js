import React, { Component } from 'react';

import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";
import { Link } from 'react-router-dom';

class List3Links extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'all',
      checkedItems: ''
    }
    this.onAddItemStatus = this.onAddItemStatus.bind(this);
    this.onDeleteItemStatus = this.onDeleteItemStatus.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    switch(e.target.name){
      case 'all' :
        this.setState({
          status: "all"
        });
      break;

      case "active":
        this.setState({
          status: "active"
        });
      break;

      case "purchased":
        this.setState({
          status: "purchased"
        });
      break;
    }
  }

  onAddItemStatus(item){
    this.setState({
      checkedItems: [...this.state.checkedItems, item]
    })
  }

  onDeleteItemStatus(item){
    if(this.state.checkedItems != undefined ){
    let tmp = this.state.checkedItems;
    tmp.splice(tmp.indexOf(item))
    this.setState({
      checkedItems: tmp
    })
  }
  }

  render() {

    return (
      <div>
        <ul style = {{"list-style-type": "none"}}>
            {this.props.data.map(
              (item, index) =>(
            <li id={shortid.generate()}>
              <Checkbox name={item} onAddItemStatus={this.onAddItemStatus}
                                    onDeleteItemStatus={this.onDeleteItemStatus}>
                {item}
              </Checkbox>
           </li>
            ))}
        </ul>

        <Link to="/examples"
        onClick={this.handleClick}
        name={"all"}>
          All
        </Link>
        <Link to="/examples"
        onClick={this.handleClick}
        name={"active"}>
          Active
        </Link>
        <Link to="/examples"
        onClick={this.handleClick}
        name={"purchased"}>
          Purchased
        </Link>
      </div>
    );
  }
}

export default List3Links;
