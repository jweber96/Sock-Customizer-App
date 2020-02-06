import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { pickPrimaryColor, pickSecondaryColor } from "./ColorsActions";
import "typeface-roboto";


const colors = () => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Colors</h1>
                {/* TODO: Implement the color tab... */}
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        primaryColor: state.colors.primaryColor,
        secondaryColor: state.colors.secondaryColor,
        colors: state.colors.colors
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputPrimaryColor: (color) => dispatch(pickPrimaryColor(color)),
        inputSecondaryColor: (color) => dispatch(pickSecondaryColor(color))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(colors)
