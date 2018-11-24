import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
          <li key={this.props.key}>
            {this.props.item}
          </li>
        );
    }
}

export default Item;
