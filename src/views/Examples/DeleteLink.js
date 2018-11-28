import React, { Component } from 'react';
import { Redirect } from 'react-router';

class DeleteLink extends Component {
    render() {
      console.log("this is delete link");
        return (
          <Redirect to = "/examples" />
        );
    }
}

export default DeleteLink;
