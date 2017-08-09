import React, {Component} from "react";
import {Link} from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

export default class Layout extends Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    closeMenu = () => this.setState({ open: false });

    toggleMenu = () => this.setState(prevState => ({ open: !prevState.open }));

    render() {
        const {children, className} = this.props;

        return (
            <div id="app-container">
                <AppBar title="Scaffolded App Title"
                        onLeftIconButtonTouchTap={this.toggleMenu} />
                <Drawer className="nav-bar"
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={open => this.setState({open})}>
                    <Link to="/" onClick={this.closeMenu}>
                        <MenuItem>Home</MenuItem>
                    </Link>
                    <Link to="/todo" onClick={this.closeMenu}>
                        <MenuItem>Todos</MenuItem>
                    </Link>
                </Drawer>
                <div id="app-content">
                    <div className={className}>
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
