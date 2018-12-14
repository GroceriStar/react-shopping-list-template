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
import List        from './screens/List/List';

import DisplayList from './views/DisplayList/DisplayList';

import GroceryView from './views/GroceryView/GroceryView';

import Departments from './screens/Departments/Departments';
import Ingredients from './screens/Ingredients/Ingredients';
import Examples    from './views/Examples/Examples';
import DeleteLink  from './views/Examples/DeleteLink';
import EditLink    from './views/Examples/EditLink';



class OldRouter extends Component {

  render() {
    console.log("this is");
    return (
        <Switch>
          <Route path='/'            component={Home} exact />

          <Route path='/profile'     component={Profile} />

          <Route path='/new'         component={New} />
          <Route path='/list'        component={List} />
          <Route path='/departments' component={Departments} />
          {/* Are we reallly can have exact for a few routes? */}


          <Route path='/display'     component={DisplayList} exact />

          {/*}<Route path='/display'     component={GroceryView} exact /> */}

          <Route path='/ingredients' component={Ingredients} exact />

          <Route path='/examples'    component={Examples} exact />
          <Route path='/examples/delete/:id' component={DeleteLink} />
          <Route path='/examples/edit/:id' component={EditLink} />
      </Switch>
    );
  }

}



export default OldRouter;
