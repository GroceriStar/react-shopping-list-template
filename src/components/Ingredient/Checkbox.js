import React, { Component } from 'react';

class Checkbox extends Component {
    render() {
        return (
            <input type="checkbox">{this.props.children}</input>
        );
    }
}

export default Checkbox;
