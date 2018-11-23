import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

// import Home        from './screens/Home/Home';

//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here

// @TODO instead of screens we'll use views folder soon.

class ShoppingRouter extends Component {
  render() {
    return (
      <Fragment>
      {/*
        <Route path='/shopping/:groceryId/:departmentId'            component={Component} />
        <Route path='/changename'     component={Component} />
        <Route path='/view/groceries'         component={Component} />
        <Route path='/changedepartmentid/:id/:departmentId'        component={Component} />
        <Route path='/add/ing/:id/:groceryId' component={Component} />
        <Route path='/changedepartmentid/:id/:departmentId' component={Component} />
        <Route path='/togglepurchased' component={Component} />
        <Route path='/clearpurchased' component={Component} />
        <Route path='/unattach' component={Component} />
        */}
      </Fragment>
    );
  }
}



export default ShoppingRouter;
