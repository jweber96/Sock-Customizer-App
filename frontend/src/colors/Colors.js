import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import "typeface-roboto";
import ColorsPicker from "./ColorsPicker";


const colors = () => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Colors</h1>
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
