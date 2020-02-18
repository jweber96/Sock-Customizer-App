import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import "typeface-roboto";

const design = () => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                {/* TODO: Implement the design tab... */}
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        // Nothing to map yet...
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(design)