import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import injectTapEventPlugin from "react-tap-event-plugin";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import initializeStore from './config/store';
import RoutingTable from './config/routes';
import './index.css';

injectTapEventPlugin();

const store = initializeStore({});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router>
                <RoutingTable />
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
