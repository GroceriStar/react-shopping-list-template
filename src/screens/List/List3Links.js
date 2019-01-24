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
      list: this.props.data,
    }
    this.onAddItem = this.onAddItem.bind(this);
    this.onDeleteItem = this.onDeleteItem.bind(this);

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
      let result =
        _.filter(this.state.list, function(item){
        return !item.isChecked
      })
        this.setState({
          status: "active",
          list: result
        });
        console.log(result);
      break;

      case "purchased":
        this.setState({
          status: "purchased"
        });
      break;
    }
  }

  onAddItem(item){
    let result =
    _.map(this.state.list, function(obj){
      if (obj.name === item){
        return {
          ...obj,
          isChecked: true,
        }
      }
      return obj;
    })

    console.log(result);
    this.setState({
      list: result
    })
  }

  onDeleteItem(item){

  //   if(this.state.checkedItems != undefined ){
  //   let tmp = this.state.checkedItems;
  //   tmp.splice(tmp.indexOf(item))
  //   this.setState({
  //     checkedItems: tmp
  //   })
  // }
  }

  render() {
  console.log(this.state.list);
    return (
      <div>
        <ul style = {{"list-style-type": "none"}}>
            {this.state.list.map(
              (item, index) =>(
            <li id={shortid.generate()}>
              <Checkbox name={item.name} isChecked={item.isChecked} onAddItem={this.onAddItem}
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
