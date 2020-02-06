import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import "typeface-roboto";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";

const cut = () => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Cut</h1>
                <NavLink to='/customizer'>
                    <Button>Go to next page</Button>
                </NavLink>
                {/* TODO: Implement the detail tab... */}
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(cut)
