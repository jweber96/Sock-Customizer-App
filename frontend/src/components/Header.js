import React from "react"
import { AppBar, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import 'typeface-roboto';


const header = (props) => {
    return (
        <React.Fragment>
            <AppBar position="sticky">
                <Toolbar>
                    <h1>Sock Customerizer</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(header)
