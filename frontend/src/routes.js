import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import PageStart from './pages/PageStart';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={PageStart} />
                <Route path="/teste"  component={Dashboard} />
            </Switch>
        </BrowserRouter>
    );
}