import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

// @TODO instead of screens we'll use views folder soon.


// import New         from './screens/New/New';
// import List        from './screens/List/List';
// import DisplayList from './screens/DisplayList/DisplayList';
// import Departments from './screens/Departments/Departments';


//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here
class DepartmentRouter extends Component {
  render() {
    return (
      <Fragment>
      {/*
        <Route path='/department/:id/groceryId'      component={Component} />
        <Route path='/departments/show/:groceryId'   component={Component} />
        <Route path='/hide/department/:id/:groceryId' component={Component} />
        <Route path='/show/department/:id/:groceryId' component={Component} />
        <Route path='/show/all/:groceryId' component={Component} />
        <Route path='/visibility/department/:id/groceryId' component={Component} />
        <Route path='/remove/department/:id/groceryId' component={Component} />
        */}
      </Fragment>
    );
  }
}



export default DepartmentRouter;
