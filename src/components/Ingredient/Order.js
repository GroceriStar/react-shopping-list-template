import React, { Component } from 'react';
import ListItem from './ListItem';

class Order extends Component {
    render() {
        return (
            <ListItem data = {this.props.data} />
        );
    }
}

export default Order;
