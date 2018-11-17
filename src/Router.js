import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';



import Home    from './Home/Home';
import Profile from './Profile/Profile';
import New     from './New/New';
import List    from './List/List';
import DisplayList from './DisplayList/DisplayList';
import Departments from './Departments/Departments';
import Ingredients from './Ingredients/Ingredients';




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
