import React, { Component } from 'react';
import { Redirect } from 'react-router';

class EditLink extends Component {
    render() {
      console.log(parseInt(this.props.match.params.id,10));

      console.log("this is edit link");
        return (
          <Redirect to = "/examples" />
        );
    }
}

export default EditLink;
