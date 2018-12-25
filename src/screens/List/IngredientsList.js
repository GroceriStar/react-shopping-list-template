import React, { Component } from 'react';

import ListItem from "../../components/Ingredient/ListItem";

class IngredientsList extends Component {
  getIngredientsName(ingredients){
    return ingredients.map(item =>
    item.name
  )
  }

  render() {
    return (
    <ListItem data={this.getIngredientsName(this.props.ingredients)}/>
    );
  }
}

export default IngredientsList;
