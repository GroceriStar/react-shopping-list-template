import React, { Component } from 'react';


class EditableLable extends Component {
    render() {
        return (
            <label htmfor={this.props.id}>{this.props.children}</label>
        );
    }
}

export default EditableLable;
