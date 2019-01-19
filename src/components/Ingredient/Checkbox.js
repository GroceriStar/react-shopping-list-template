import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
              <label>
            <input type="checkbox" name={this.props.name} />
            {this.props.children}
            </label>
        );
    }
}

export default Checkbox;
