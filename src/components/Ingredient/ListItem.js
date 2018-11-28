import React, { Component } from 'react';
import shortid from "shortid";
import Item from './Item'

class ListItem extends Component {
    render() {
        return (
          <ul>
              {this.props.data.map(
                item =>
                  <Item
                    key={shortid.generate()}
                    id={shortid.generate()}
                    item={item}
                  />

                )}
          </ul>
        );
    }
}

export default ListItem;
