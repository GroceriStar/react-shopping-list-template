import React, {
  Component
} from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';


import OldRouter from './OldRouter';


// import GroceryRouter from './components/GroceryList/GroceryRouter';

// import DepartmentsRouter from ''
// import IngredientsRouter from ''
// import FavoritesRouter from ''
// import PurchasedRouter from ''

// import Home        from './views/Home/Home';
// import Profile     from './views/Profile/Profile';
// import New         from './views/New/New';
// import List        from './screens/List/List';
// import DisplayList from './screens/DisplayList/DisplayList';
// import Departments from './screens/Departments/Departments';
// import Ingredients from './screens/Ingredients/Ingredients';
// import Examples    from './views/Examples/Examples';



// Later this router will be used as App router that will connect nested routes, from sub-components
// https://medium.com/iqube-bits/a-modular-approach-to-routing-with-react-router-4-d4a3db9f56ae

class Router extends Component {
  render() {
    return (
          <Switch>
              <Route path='/'            component={OldRouter} />
              {/*}<Route path='/grocery'    component={GroceryRouter} /> */}

              
          </Switch>
    );
  }
}



export default Router;
