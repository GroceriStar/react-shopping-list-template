import React, { Component } from 'react';

import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";
import { Link } from 'react-router-dom';

class ListCheckbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'all'
    }

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

  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
              <li id={shortid.generate()}>
                <Link to="/examples"
                onClick={this.handleClick}
                name={item.status}>
                  {item.name}
                </Link>
              </li>
          ))}
      </ul>
    );
  }
}

export default ListCheckbox;
