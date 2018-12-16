import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListItemLink extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e){

    console.log("Click");
  }
  getSubItem(item){
    return (
      <div>
        {item.name}
      <ul>
          {item.subList.map(item => <Link onClick={this.onClick} to={`/info/${item}`}><li key={item}>{ item }</li></Link>)}
      </ul>
    </div>
    )
  }
  render() {
    const { list } = this.props
    return (
      <ul>
        {list.map(item => <Link onClick={this.onClick} to={`/info/${item.name}`}><li key={item.name}>{  this.getSubItem(item) }</li></Link>)}
      </ul>
    )
  }
}

export default ListItemLink;
