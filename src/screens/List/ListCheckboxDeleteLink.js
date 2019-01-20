import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Checkbox from "../../components/Ingredient/Checkbox";
import DeleteLink     from "../../components/Ingredient/DeleteLink";
import shortid from "shortid";

class ListCheckboxDeleteLink extends Component {

  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
          <li key={shortid.generate()}
              id={shortid.generate()}>
            <Checkbox name={item}>
              <DeleteLink id={index} url={"/examples/delete/" + index}>
                {item}
              </DeleteLink>
            </Checkbox>
          </li>
        ))
          }
      </ul>
    );
  }
}

export default ListCheckboxDeleteLink;
