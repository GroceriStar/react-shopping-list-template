import React, { Component } from 'react';
import classNames from 'classnames';

class ItemInput extends Component {

    constructor(props){
      super(props)


    }

    // some functions that we have
    // and they are related to events of this UI elelemnt


    render() {

      const { value, handleChange, handleKeyUp } = props;
      const inputClass = "xxx"
      return (
          <input
            autoFocus
            type="text"
            className={inputClass}
            value={value}
            onChange={handleChange}
            onKeyUp={handleKeyUp}
            placeholder="Add new ingredient"
           />

      );
    }
}

export default ItemInput;
