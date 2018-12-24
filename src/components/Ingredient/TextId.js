import React, { Component } from 'react';

class TextId extends Component {
    render() {
        return (
            <p id={this.props.id}>{this.props.children}</p>
        );
    }
}

export default TextId;
