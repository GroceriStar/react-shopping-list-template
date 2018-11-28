import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditLink extends Component {
  constructor(props){
    super(props)

    this.state = {
      textLink: props.children,
      url: props.url,
      isHidden: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isHidden: ! this.state.isHidden
    })
  }

  onChange(e){
    e.preventDefault();
    this.setState({
      textLink: e.target.value
    })
  }

    render() {
        return (
          <div>
          <Link
            to={this.state.url}
            onClick = {this.handleClick}
            key = {this.props.id}
            >
              {this.state.textLink}
          </Link>
          <input type="text"
            hidden = {this.state.isHidden}
            onChange = {( (e) => this.onChange(e) )} />
        </div>
        );
    }
}

export default EditLink;
