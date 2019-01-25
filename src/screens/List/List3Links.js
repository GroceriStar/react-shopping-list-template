import React, { Component } from 'react';
import _        from 'lodash';
import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";
import { Link } from 'react-router-dom';

class List3Links extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'all',
      checkedItems: [],
      data: this.props.data,
      list: this.props.data,
    }

    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    let result;

    switch(e.target.name){
      case 'all' :
        this.setState({
          status: "all",
          list: this.state.data
        });
      break;

      case "active":
      result =
        _.filter(this.state.data, function(item){
        return !item.isChecked
      })
        this.setState({
          status: "active",
          list: result
        });
      break;

      case "purchased":
      result =
        _.filter(this.state.data, function(item){
        return item.isChecked
      })
        this.setState({
          status: "purchased",
          list: result
        });
      break;
    }
  }

  onAddItem(item){
    let result =
    _.map(this.state.data, function(obj){
      if (obj.name === item){
        return {
          ...obj,
          isChecked: true,
        }
      }
      return obj;
    })

    this.setState({
      data: result,
      list: result
    })
  }

  onDeleteItem(item){
    let result =
    _.map(this.state.data, function(obj){
      if (obj.name === item){
        return {
          ...obj,
          isChecked: false,
        }
      }
      return obj;
    })

    this.setState({
      data: result,
      list: result
    })
  }

  render() {
    return (
      <div>
        <ul style = {{"list-style-type": "none"}}>
            {this.state.list.map(
              (item, index) =>(
            <li id={shortid.generate()}>
              <Checkbox
                name={item.name}
                isChecked={item.isChecked}
                onAddItem={this.onAddItem}
                onDeleteItem={this.onDeleteItem}>

                {item.name}
                
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
