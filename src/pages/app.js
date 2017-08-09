import React, {Component} from 'react';

// Common
import logo from '../images/logo.svg';
import Layout from './_layout';

// Styles
import './styles/App.css';

class App extends Component {
    render() {
        return (
            <Layout className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    This is the home page of the app, mounted at
                </p>
                <pre>/</pre>
            </Layout>
        );
    }
}

export default App;
