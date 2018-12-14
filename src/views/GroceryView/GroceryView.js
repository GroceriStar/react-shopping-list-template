// @TODO move this view away to a separated repo.
// it's just a plan displaying of data, nothing more.

import React, { Component, Fragment } from 'react';

import GroceryList from '../../components/GroceryList/GroceryList';

import { getGroceryCollection, getGroceryById } from "../../selectors/selector.js";












class GroceryView extends Component {


  render() {
    console.log( getGroceryCollection() );
    // const data = this.state.data.filter(
    //   d => d.name.toLowerCase().indexOf(this.state.filter) !== -1
    // );

    return (
      <Fragment>
      <GroceryList items={getGroceryById(3)} />
      </Fragment>
    );
  }
}

export default GroceryView;
