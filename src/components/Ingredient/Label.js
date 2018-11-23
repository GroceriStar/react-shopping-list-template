import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <label for={this.props.id}>{this.props.children}</label>
        );
    }
}

export default Label;
