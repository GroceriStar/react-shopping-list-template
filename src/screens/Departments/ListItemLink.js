import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItemLink extends Component {
  render() {
    const { list } = this.props
    return (
      <ul>
        {list.map(item => <Link to={`/info/${item}`}><li key={item}>{ item }</li></Link>)}
      </ul>
    )
  }
}

export default ListItemLink;