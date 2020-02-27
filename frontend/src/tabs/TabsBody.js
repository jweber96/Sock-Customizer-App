import React from "react"
import { connect } from "react-redux";
import { Button, Grid, Paper } from "@material-ui/core";
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
                                <Paper variant="outlined" square style={{ backgroundColor: "#eff0f1", marginTop: 50, width: "75%" }}>
                                    <Grid container direction="row" justify="center" alignItems="center" style={{margin: "20"}}>
                                        <Grid justify="center" alignItems="center" xs={6}><div>{props.children}</div></Grid>
                                        <Grid justify="center" alignItems="center" xs={6}><Preview /></Grid>
                                    </Grid>
                                </Paper>
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
