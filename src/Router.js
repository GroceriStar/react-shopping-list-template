import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';



import Home        from './views/Home/Home';
import Profile     from './views/Profile/Profile';
import New         from './views/New/New';
import List        from './screens/List/List';
import DisplayList from './screens/DisplayList/DisplayList';
import Departments from './screens/Departments/Departments';
import Ingredients from './screens/Ingredients/Ingredients';
import Examples    from './views/Examples/Examples';



// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

class Router extends Component {
  render() {
    return (
          <Switch>
              <Route path='/'            component={Home} exact />
              <Route path='/profile'     component={Profile} />
              <Route path='/new'         component={New} />
              <Route path='/list'        component={List} />
              <Route path='/departments' component={Departments} />
              {/* Are we reallly can have exact for a few routes? */}
              <Route path='/display'     component={DisplayList} exact />
              <Route path='/ingredients' component={Ingredients} exact />

              <Route path='/examples'    component={Examples} exact />
          </Switch>
    );
  }
}



export default Router;
