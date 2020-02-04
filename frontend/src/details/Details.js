import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import "typeface-roboto";


const details = () => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Details</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(details)
