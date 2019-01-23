import React, { Component } from 'react';

import Checkbox from "../../components/Ingredient/Checkbox";
import shortid from "shortid";
import ListItemDelete from "../Departments/ListItemDelete";
import ListItemEdit from "../Departments/ListItemEdit";

class ListLayouts extends Component {

  render() {
    let layout;
    switch (this.props.layout) {
      case "ListItemDelete":
        layout = <ListItemDelete list={this.props.data}/>
          break;

      case "ListItemEdit":
        layout = <ListItemEdit list={this.props.data}/>
          break;
    }

    return (
      <div>
        {layout}
      </div>
    );
  }
}

export default ListLayouts;
