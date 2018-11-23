import React, { Component } from 'react';
// import DashboardRouter from './dashboard.route';
import { NavLink } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div className="main">
                <h4>React Router</h4>
                <nav>
                   <NavLink
                       className="main-anchor"
                       to="/departments">
                       Departments
                   </NavLink>
                   <NavLink
                       className="main-anchor"
                       to="/grocery-lists">
                       Grocery Lists
                   </NavLink>
                </nav>
                <div>
                    <DashboardRouter/>
                </div>
            </div>
        );
    }
}

export default Dashboard;
