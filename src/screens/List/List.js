import React, { Component } from 'react';

import { getIngredients,
  getGroceryLists,
  getUsers,
  getDepartments,
  getAllIngredients
} from "../../selectors/selector.js";




class List extends Component {

  render() {

    // console.log(getAllIngredients());
    // console.log(getGroceryLists());
    // console.log(getUsers());
    // console.log(getDepartments(false));
    // console.log(getDepartments(false));
    //
    // console.log(getIngredients("Fresh vegetables"));


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
