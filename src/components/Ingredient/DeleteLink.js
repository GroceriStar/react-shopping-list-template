import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import shortid from "shortid";

class DeleteLink extends Component {
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
            key = {shortid.generate()}
            to={this.state.url}
            >
              {this.state.textLink}
          </Link>
        );
    }
}

export default DeleteLink;
