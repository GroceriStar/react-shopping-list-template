import React, { Component } from 'react';

import data from '@groceristar/groceristar-fetch/groceristar'

class Departments extends Component {
    render() {


      console.log(data.getIngredients());
      console.log(data.getGrocery());
      console.log(data.getUsers());
      console.log(data.getDepartments());
      console.log(data.getAllDepartments());
      console.log(data.getAllIngredientsByOneDepartment("Fresh vegetables"));



        return (
            <div>
              Departments component
            </div>
        );
    }
}

export default Departments;
