import React, { Component } from "react";
import shortid from "shortid";

class Selectbox extends Component {
  handleChange(e) {
    this.props.onSelect(e.target.value);
  }

  render() {
    return (
      <select
        value={this.props.selectedValue}
        onChange={e => this.handleChange(e)}
      >
        {this.props.data.map(function(item) {
          return (
            <option key={shortid.generate()} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    );
  }
}

export default Selectbox;
