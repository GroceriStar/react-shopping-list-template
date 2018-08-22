import React, { Component } from 'react';
import data from '@groceristar/groceristar-fetch/search';

class List extends Component {

  render() {
    let allergies = data.getAttribute('allergies');
    console.log(allergies)
    return (
      <div>
        This is list route
        <div>
        </div>
      </div>

    );
  }
}

export default List;
