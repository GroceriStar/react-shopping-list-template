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


class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/'        component={Home} exact />
                    <Route path='/profile' component={Profile} />
                    <Route path='/new'     component={New} />
                    <Route path='/list'    component={List} />
                    <Route path='/departments'    component={Departments} />
                    <Route path='/display'    component={DisplayList} exact />
                </Switch>
            </main>
        );
    }
}

export default Main;
