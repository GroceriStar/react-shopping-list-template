import React, { Component } from 'react'

class ListItemEdit extends Component {
  
  state = {
    list: [],
    hidenFields: true,
    inputText: '',
    currentItem: ''
  }

  componentDidMount() {
    this.setState({list: this.props.list})
  }

  onChange = e => {
    e.preventDefault();
    const value = e.target.value;
    const { currentItem, list } = this.state;
    const newList = [...list];
    const index = list.indexOf(currentItem);
    newList[index] = value;
    this.setState({
      inputText: value,
      list: newList,
      currentItem: value
    });
  }

  onclickItem = (item) => {
    this.setState({
      hidenFields: false,
      inputText: item,
      currentItem: item
    });
  }

  onclickButton = e => {
    e.preventDefault();
    this.setState({
      hidenFields: true,
      inputText: '',
      currentItem: '',
    });
  }

  render() {
    const { list, hidenFields, inputText } = this.state;
    return (
      <div>
        <input  type="text" hidden={hidenFields} onChange={this.onChange} value={inputText} />
        <button onClick={this.onclickButton} hidden={hidenFields}>Hide</button>
        <ul>
          {list.map(item => (
            <li id={item} style={{cursor: 'pointer'}} onClick={() => this.onclickItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default ListItemEdit;