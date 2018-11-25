import React, { Component } from 'react'

export default class ListItemDelete extends Component {
  
  state = {
    list: this.props.list
  }

  onClick = (item) => {
    const newList = [...this.state.list];
    const index = newList.indexOf(item);
    newList.splice(index, 1);
    this.setState({list: newList});
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <ul>
          {list.map(item => <li style={{cursor: 'pointer'}} onClick={() => this.onClick(item)}>
            {item}
          </li>)}
        </ul>
      </div>
    )
  }
}
