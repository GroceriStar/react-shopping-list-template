import React, { Component } from 'react';

class EditLink extends Component {
    render() {
        return (
          <a href={this.props.url}>{this.props.children}</a>

        );
    }
}

export default EditLink;
