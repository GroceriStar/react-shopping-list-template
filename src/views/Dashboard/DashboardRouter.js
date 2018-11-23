import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

import Home        from './screens/Home/Home';

//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here

// @TODO instead of screens we'll use views folder soon.

class DashboardRouter extends Component {
  render() {
    return (
          <Fragment>
            
            {/*<Route path='/create-new-grocery'     component={Profile} />
            <Route path='/view/groceries'         component={New} />
            <Route path='/change/grocery/name/:groceryId'        component={List} />
            <Route path='/update/name' component={Departments} />
            */}
          </Fragment>
    );
  }
}



export default DashboardRouter;
