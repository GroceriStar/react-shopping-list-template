import React, { Component } from "react";

import ListItem   from "../ListItem";
import Selectbox  from "../Selectbox";
import { getIngredients, getGroceryByName }   from "../../../selectors/selector";

class Form2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredientsList: [],
      selectedIngredient: "Asparagus",
      selectedDepartment: "Fresh vegetables",
      groceryName: "Ultimate Grocery List"
    }

    this.handleSelectedIngredient = this.handleSelectedIngredient.bind(this);
    this.handleSelectedDepartment = this.handleSelectedDepartment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSelectedIngredient(ingredient){
    this.setState({
      selectedIngredient: ingredient
    })
  }

  handleSelectedDepartment(department){
    this.setState({
      selectedDepartment: department
    })
  }

  handleSubmit(e){
    this.state.ingredientsList.push(this.state.selectedIngredient);
    this.setState({
      ingredientsList: this.state.ingredientsList
    })
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        
          <Selectbox
            selectedValue={this.state.selectedIngredient}
            onSelect={this.handleSelectedIngredient}
            data={getIngredients(this.state.selectedDepartment)}
          />
          <Selectbox
            selectedValue = {this.state.selectedDepartment}
            onSelect={this.handleSelectedDepartment}
            data={getGroceryByName(this.state.groceryName)[0].departments}/>
            
           <ListItem data= {this.state.ingredientsList}/>
           <input type="Submit" />
        </form>
      </div>
    );
  }
}

export default Form2;
