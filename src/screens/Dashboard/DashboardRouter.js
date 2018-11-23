import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here

// @TODO instead of screens we'll use views folder soon.

class DashboardRouter extends Component {
  render() {
    return (
          <Fragment>
            <Route path='/'            component={Home} exact />
            <Route path='/profile'     component={Profile} />
            <Route path='/new'         component={New} />
            <Route path='/list'        component={List} />
            <Route path='/departments' component={Departments} />
          </Fragment>
    );
  }
}



export default DashboardRouter;
