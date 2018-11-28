import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
          <li key={this.props.id}>
            {this.props.item}
          </li>
        );
    }
}

export default Item;
