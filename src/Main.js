import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './Profile';
import New from './New';
import List from './List';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/profile' component={Profile} />
                    <Route path='/new' component={New} />
                    <Route path='/list' component={List} />
                </Switch>
            </main>
        );
    }
}

export default Main;
