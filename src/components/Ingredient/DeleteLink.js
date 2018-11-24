import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditLink extends Component {
  constructor(props){
    super(props)

    this.state = {
      textLink: props.children,
      url: props.url,
      isHidden: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isHidden: ! this.state.isHidden
    })
  }

    render() {
        return (
          <Link
            onClick = {this.handleClick}
            hidden = {this.state.isHidden}
            to={this.state.url}
            >
              {this.state.textLink}
          </Link>
        );
    }
}

export default EditLink;
