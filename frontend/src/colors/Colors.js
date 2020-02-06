import React from "react"
import { Grid, GridList, GridListTile } from "@material-ui/core";
import { connect } from "react-redux";
import { pickPrimaryColor, pickSecondaryColor } from "./ColorsActions";
import "typeface-roboto";


const colors = (props) => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Colors</h1>
                <GridList cellHeight={32} cols={Object.keys(props.colors).length}>
                    {
                        Object.keys(props.colors).map((color, index) => (
                            <GridListTile key={index}>
                                <svg width="32" height="32">
                                    <circle cx="16" cy="16" r="16" fill={props.colors[color]}>
                                        <title>{color}</title>
                                    </circle>
                                </svg>
                            </GridListTile>
                        ))
                    }
                </GridList>
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
