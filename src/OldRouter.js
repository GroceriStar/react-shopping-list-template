import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';

// @TODO - we trying to get rid of screens approach.
// we should use views instead

import Home        from './views/Home/Home';
import Profile     from './views/Profile/Profile';
import New         from './views/New/New';
// import List        from './screens/List/List';


import GroceryView from './views/GroceryView/GroceryView';

import Departments from './screens/Departments/Departments';


import Ingredients from './screens/Ingredients/Ingredients';










class OldRouter extends Component {

  render() {
    console.log("this is");
    return (
        <Switch>
          <Route path='/'            component={Home} exact />

          <Route path='/profile'     component={Profile} />

          <Route path='/new'         component={New} />
        {/*<Route path='/list'        component={List} />*/}
          <Route path='/departments' component={Departments} />
          {/* Are we reallly can have exact for a few routes? */}



          <Route path='/grocery-example'     component={GroceryView} exact />

          <Route path='/ingredients' component={Ingredients} exact />












      </Switch>
    );
  }

}



export default OldRouter;
