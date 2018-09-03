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

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path='/'        component={Home} exact />
                    <Route path='/profile' component={Profile} />
                    <Route path='/new'     component={New} />
                    <Route path='/list'    component={List} />
                </Switch>
            </main>
        );
    }
}

export default Main;
