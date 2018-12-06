import React, { Component } from "react";

import Selectbox from "../Selectbox";
import { groceristar } from "@groceristar/groceristar-fetch";

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
    console.log(obj);
    e.preventDefault();
  }
  handleSelect(department) {
    this.setState({
      selectedDepartment: department
    });
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
            onSelectDepartment={this.handleSelect}
            data={groceristar.getAllDepartments()}
          />
          <br />
          <input type="Submit" />
        </form>
      </div>
    );
  }
}

export default Form1;
