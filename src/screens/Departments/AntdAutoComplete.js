import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import 'antd/dist/antd.css';

class AntdAutoComplete extends Component {
  constructor (props) {
    super(props);
    this.data = this.props.data || [];
    this.state = {
      text: '',
      suggestions: []
    }
    this.selected = this.selected.bind(this);
  }

  onChange = value => {
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.data.sort().filter(i => regex.test(i));
    }
    this.setState({suggestions, text: value});
  }

  selected = (item) => {
    if (this.props.onSelect != undefined){
      this.props.onSelect(item);
    }
    let suggestions = [];
    if (item.length > 0) {
      const regex = new RegExp(`^${item}`, 'i');
      suggestions = this.data.sort().filter(i => regex.test(i));
    }
    this.setState({
      text: item,
      suggestions: suggestions
    })
  }

 render() {
   const { dataSource } = this.state;
   return (
     <AutoComplete
       dataSource={this.state.suggestions}
       style={{ width: 200 }}
       onSelect={this.selected}
       onSearch={this.onChange}
       placeholder="input here"
     />
   );
 }
}


export default AntdAutoComplete;
