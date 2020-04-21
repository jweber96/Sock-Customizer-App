import React from "react"
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import "typeface-roboto";
import { NavLink, HashRouter as Router, withRouter } from 'react-router-dom'

const header = (props) => {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Router>
                        <Typography variant="h5" onClick={()=>{props.history.push('/'); window.location.reload()}}>Sock Customizer</Typography>
                    </Router>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

const mapStateToProps = () => {
    return {
        // Nothing to map yet...
    };
}

const mapDispatchToProps = () => {
    return {
        // Nothing to map yet...
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(header))
