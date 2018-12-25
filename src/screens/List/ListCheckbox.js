import React, { Component } from 'react';

import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";

class IngredientsList extends Component {

  render() {
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            item =>
          <li key={shortid.generate()}
              id={shortid.generate()}>
            <Checkbox>
              {item}
            </Checkbox></li>
            )}
      </ul>
    );
  }
}

export default IngredientsList;
