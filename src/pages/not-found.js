import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

// Common
import logo from '../images/logo.svg';
import Layout from './_layout';

// Styles
import './styles/App.css';

class NotFound extends Component {
    static propTypes = {
        location: PropTypes.object,
    };

    render() {
        const {location} = this.props;

        return (
            <Layout className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Page not found</h2>
                </div>
                <p className="App-intro">
                    This route is not defined
                </p>
                <pre>{location.pathname}</pre>
            </Layout>
        );
    }
}

export default withRouter(NotFound);
