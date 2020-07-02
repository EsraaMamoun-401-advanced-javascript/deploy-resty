import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
import Hestory from '../history/history';

const Routes = props => {
    return (
        <main>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/hestory" exact>
                <Hestory />
            </Route>
        </main>
    )
}

export default Routes;