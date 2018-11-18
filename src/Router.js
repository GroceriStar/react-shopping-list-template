import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';



import Home        from './screens/Home/Home';
import Profile     from './screens/Profile/Profile';
import New         from './screens/New/New';
import List        from './screens/List/List';
import DisplayList from './screens/DisplayList/DisplayList';
import Departments from './screens/Departments/Departments';
import Ingredients from './screens/Ingredients/Ingredients';




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
              </Switch>
        );
    }
}



export default Router;
