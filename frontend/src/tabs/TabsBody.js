import React from "react"
import { connect } from "react-redux";
import { Button, Grid, Paper } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Preview from "../preview/Preview";
import "typeface-roboto";
import { withStyles } from '@material-ui/core/styles';

const Section = withStyles({
    root: {
        backgroundColor: "#eff0f1", 
        width: '80%', 
        marginTop: 25, 
        paddingBottom: 50,
        marginBottom: 25
    }
})(Paper);

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
                                <Section variant="outlined">
                                    <Grid container direction="row" justify="center" alignItems="center" style={{margin: "20px"}}>
                                        <Grid item xs={6}>{props.children}</Grid>
                                        <Grid item xs={6}><Preview /></Grid>
                                    </Grid>
                                </Section>
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
