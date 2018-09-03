import React, { Component } from 'react';
import data from '@groceristar/groceristar-fetch/groceristar';

class List extends Component {

  render() {
    console.log(data.getIngredients());
    console.log(data.getGrocery());
    console.log(data.getUsers());
    console.log(data.getDepartments());
    console.log(data.getAllDepartments());
    console.log(data.getAllIngredientsByOneDepartment("Fresh vegetables"));


    return (
      <div>
        This is list route
        <div>
        </div>
      </div>

    );
  }
}

export default List;
