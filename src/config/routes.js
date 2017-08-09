import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import App from '../pages/app';
import Todo from '../pages/todo';
import NotFound from '../pages/not-found';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/todo" component={Todo} />
                <Route exact path="/" component={App} />
                <Route path="/*" component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
