import React, {
  Component, Fragment
} from 'react';
import {
  Route
} from 'react-router-dom';

// @TODO instead of screens we'll use views folder soon.

//
// import Departments from './screens/Departments/Departments';
// import Ingredients from './screens/Ingredients/Ingredients';

//@TODO please review all routes that we have here. if some of routes don't work -
// please create a simple empty component that we'll extend later

// we don't use switch because of modularity approach that we have here
class FavoriteRouter extends Component {
  render() {
    return (
          <Fragment>
            <Route path='/favorites'        component={FavoritesListView} />
            <Route path='/delete/favorites' component={DeleteFavoriteItemView} />
            <Route path='/add/favorite/:ingredientId' component={Component} />
            <Route path='/add/favorite/clear' component={Component} />
          </Fragment>
    );
  }
}



export default FavoriteRouter;
