import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import ColorsPicker from "./ColorsPicker";
import "typeface-roboto";


const colors = () => {
    return (
        <React.Fragment>
            <Grid container xs direction="column" justify="center" alignItems="center">
                <ColorsPicker isPrimary={true} />
                <ColorsPicker isPrimary={false} />
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

export default connect(mapStateToProps, mapDispatchToProps)(colors)
