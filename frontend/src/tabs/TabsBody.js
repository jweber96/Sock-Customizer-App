import React from "react"
import { connect } from "react-redux";
import { Box, Button, Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Preview from "../preview/Preview";
import "typeface-roboto";


const tabsBody = (props) => {
    return (
        <React.Fragment>
            {
                // Breaks tabs for some reason if you use === instead of ==
                // eslint-disable-next-line eqeqeq
                props.index == props.value
                    ? (
                        props.cut.cut != null
                            ? (
                                <Grid container direction="row" justify="center" alignItems="center" style={{ backgroundColor: "#eff0f1", marginTop: 77.52, width: "80%" }}>
                                    <Grid item ><Preview /></Grid>
                                    <Grid item ><Box p="3">{props.children}</Box></Grid>
                                </Grid>
                            ) : (
                                <React.Fragment>
                                    <h1>No cut selected!</h1>
                                    <NavLink to="/">
                                        <Button variant="contained" size="large" color="primary">Select a cut!</Button>
                                    </NavLink>
                                </React.Fragment>
                            )
                    ) : (
                        <></>
                    )
            }
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        index: props.index,
        children: props.children,
        value: state.tabs.value,
        cut: state.cut
    };
}

const mapDispatchToProps = () => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(tabsBody)
