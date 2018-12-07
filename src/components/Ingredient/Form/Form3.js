import React, { Component } from "react";

import ListItem       from "../ListItem";
import Selectbox      from "../Selectbox";
import { getIngredients,
         getGroceryByName,
         getListOfIngredients }  from "../../../selectors/selector";
import AutoComplete   from "../../../screens/Departments/AutoComplete";

class Form3 extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedIngredient: ""
    }
    this.handleSelectedIngredient = this.handleSelectedIngredient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSelectedIngredient(ingredient){
    this.setState({
      selectedIngredient: ingredient
    })
  }
  // @TODO add query for adding data to db
  handleSubmit(e){

    console.log(this.state.selectedIngredient);
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <AutoComplete
          onSelect={this.handleSelectedIngredient}
          data={getListOfIngredients()}/>
      <input type="Submit" />
      </form>
      </div>
    );
  }
}

export default Form3;
