import React, { Component } from 'react';

class SimpleText extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
}

export default SimpleText;
