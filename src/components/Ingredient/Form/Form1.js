import React, { Component } from "react";

import Selectbox            from "../Selectbox";
import { getDepartments }   from "../../../selectors/selector";

class Form1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ingredient: "",
      selectedDepartment: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      ingredient: e.target.value
    });
  }

  handleSubmit(e) {
    let obj = {
      ingredient: this.state.ingredient,
      department: this.state.selectedDepartment
    };
    this.updateDB();
    console.log(obj);
    e.preventDefault();
  }

  handleSelect(department) {
    this.setState({
      selectedDepartment: department
    });
  }

  //@TODO Query for DB
  updateDB(){

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Input Ingredient name</label>
          <br />
          <input type="text" onChange={this.handleChange} />
          <br />
          <Selectbox
            selectedValue={this.state.selectedDepartment}
            onSelect={this.handleSelect}
            data={getDepartments(true)}
          />
          <br />
          <input type="Submit" />
        </form>
      </div>
    );
  }
}

export default Form1;
