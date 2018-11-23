import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

// @TODO instead of screens we'll use views folder soon.

//
// import Home        from './screens/Home/Home';
// import Profile     from './screens/Profile/Profile';
// import New         from './screens/New/New';
// import List        from './screens/List/List';
// import DisplayList from './screens/DisplayList/DisplayList';
// import Departments from './screens/Departments/Departments';
// import Ingredients from './screens/Ingredients/Ingredients';


//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here
class IngredientRouter extends Component {
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



export default IngredientRouter;
