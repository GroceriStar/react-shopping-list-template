import React, { Component } from 'react';

 class AutoComplete extends Component {
  constructor (props) {
    super(props);
    this.data = this.props.data || [];
    this.state = {
      text: '',
      suggestions: []
    }
  }
  
  onChange = e => {
    e.preventDefault();
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.data.sort().filter(i => regex.test(i));
    }
    this.setState({suggestions, text: value});
  }

  selected = (item) => {
    this.setState({text: item})
  }

  showSuggestions = () => {
    const { suggestions } = this.state;
    if (suggestions.length === 0) return null;
    const element = (
    <ul>
      { suggestions.map(item => <li style={{cursor: 'pointer'}} onClick={() => this.selected(item)}>{item}</li>) }
    </ul>)
    return element;
  }

  render() {
    const { text } = this.state;
    return (
      <div style={{height: '200px'}}>
        <input type="text" onChange={this.onChange} value={text} />
        {this.showSuggestions()}
      </div>
    )
  }
}

export default AutoComplete;