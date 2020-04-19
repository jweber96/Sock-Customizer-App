import React from "react"
import { connect } from "react-redux";
import { Button, Grid, Paper, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Preview from "../preview/Preview";
import "typeface-roboto";
import { withStyles } from '@material-ui/core/styles';
import theme from "../theme";

const Section = withStyles({
    root: {
        backgroundColor: theme.palette.primary.light,
        width: '80%', 
        marginTop: 25, 
        paddingBottom: 50,
        marginBottom: 25,
        borderColor: theme.palette.primary.dark
    }
})(Paper);

const StyledButton = withStyles({
    label: {
        color: 'white',
    },
})(Button);

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
                                    <Typography variant="h5">No cut selected!</Typography>
                                    <NavLink to="/">
                                        <StyledButton variant="contained" size="large" color="primary">Select a cut!</StyledButton>
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
