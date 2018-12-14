import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

// @TODO instead of screens we'll use views folder soon.

//
// import Home        from './screens/Home/Home';

// import New         from './views/New/New';
// import List        from './views/List/List';

// import Departments from './views/Departments/Departments';



//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here
class GroceryRouter extends Component {
  render() {
    return (
          <Fragment>
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
          </Fragment>
    );
  }
}



export default GroceryRouter;
