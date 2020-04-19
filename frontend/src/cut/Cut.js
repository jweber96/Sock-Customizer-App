import React from "react"
import { Grid, Paper, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import CutPicker from "./CutPicker";
import "typeface-roboto";
import { withStyles } from '@material-ui/core/styles';
import theme from "../theme";

const Container = withStyles({
    root: {
        width: '100%'
    }
})(Grid);

const Section = withStyles({
    root: {
        backgroundColor: theme.palette.primary.light,
        width: '80%', 
        marginTop: 25, 
        paddingBottom: 50,
        borderColor: theme.palette.primary.dark
    }
})(Paper);

const Title = withStyles({
    root: {
        marginTop: 20
    }
})(Grid);

const cut = (props) => {
    return (
        <React.Fragment>
            <Section variant="outlined">
                <Title container justify="center" alignItems="center">
                    <Typography variant="h5">Select Cut Length</Typography>
                </Title>
                <Container container direction="row" justify="space-evenly" alignItems="center">
                    {
                        Object.keys(props.cuts).map((index) => (
                            <CutPicker data={props.cuts[index]} key={index} />
                        ))
                    }
                </Container>
            </Section>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        cuts: state.cut.cuts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(cut)
