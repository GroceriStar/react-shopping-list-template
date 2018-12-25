import React, { Component } from 'react';

import { getIngredients,
  getGroceryLists,
  getUsers,
  getDepartments,
  getAllIngredients
} from "../../selectors/selector.js";

import ListItem from "../../components/Ingredient/ListItem";

class IngredientsList extends Component {
  getIngredientsName(ingredients){
    return ingredients.map(item =>
    item.name
  )
  }
  render() {
    console.log(this.props.ingredients);
    return (
    <ListItem data={this.getIngredientsName(this.props.ingredients)}/>
    );
  }
}

export default IngredientsList;
