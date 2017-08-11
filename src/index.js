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
    // @TODO: Update the basename to match your default path, or remove it if you are mounted at `/`
    <Provider store={store}>
        <MuiThemeProvider>
            <Router basename="/crapshoot">
                <RoutingTable />
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
