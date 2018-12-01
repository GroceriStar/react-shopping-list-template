import React, { Component } from 'react';
import { Redirect } from 'react-router';

class DeleteLink extends Component {
    render() {
        console.log(parseInt(this.props.match.params.id,10));
      console.log("this is delete link");
        return (
          <Redirect to = "/examples" />
        );
    }
}

export default DeleteLink;
