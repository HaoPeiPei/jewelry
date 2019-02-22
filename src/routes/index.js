import React from 'react';
import {Route, Switch, Redirect, withRouter, BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from '../component/Loading';

const asyncHome = Loadable({loader: () => import('../pages/Home'), loading: Loading});

const Routes = () => (
    <Router>
        <Switch>
            <Route path={`/`} exact component={asyncHome} />
        </Switch>
    </Router>
)

export default Routes;