import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

import _ from 'lodash';

import routes from '../../routes/grocery'
// @TODO instead of screens we'll use views folder soon.

//
// import Home        from './screens/Home/Home';

// import New         from './views/New/New';
// import List        from './views/List/List';

// import Departments from './views/Departments/Departments';



//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later



// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}


const GroceryHeader = ({  }) => (
  <nav>
      <ul>
          <li>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              Profile
            </Link>
          </li>
          <li>
            <Link to='/new'>
              New
            </Link>
          </li>

          <li>
            <Link to='/grocery-example'>
              View Details of Grocery List
            </Link>
          </li>
          <li>
            <Link to='/departments'>
              departments
            </Link>
          </li>
          <li>
            <Link to='/examples'>
              examples
            </Link>
          </li>
      </ul>
  </nav>
)



// we don't use switch because of modularity approach that we have here
class GroceryRouter extends Component {
  render() {
    return (
          <Fragment>
            <GroceryHeader />
          {/*
            <Route path='/view/grocery/:groceryId'    component={Home} exact />
            <Route path='/view/ultimategrocery'     component={Component} />
            <Route path='/view/collection/groceries'         component={Component} />
            <Route path='/view/grocery/hidden/:groceryId'        component={Component} />
            <Route path='/auth/attach-grocery-to-user/:groceryId' component={Component} />
            <Route path='/remove/grocery/:groceryId' component={Component} />
            <Route path='/clone/:groceryId' component={Component} />
            <Route path='/cloneform/' component={Component} />
            <Route path='/afterclone' component={Component} />
            <Route path='/clone-grocery/:groceryId' component={Component} />
            */}
            {_.map(routes, (route, index) => {
              <RouteWithSubRoutes key={index} {...route} />
            })}

          </Fragment>
    );
  }
}



export default GroceryRouter;
