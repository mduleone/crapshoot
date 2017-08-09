import React, {Component} from 'react';
import {Route, Switch} from 'react-router';

import App from '../pages/app';
import Todo from '../pages/todo';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/todo" component={Todo} />
            </Switch>
        );
    }
}

export default Routes;
