import React, { Component } from 'react';

class Label extends Component {
    render() {
        return (
            <label htmfor={this.props.id}>{this.props.children}</label>
        );
    }
}

export default Label;
