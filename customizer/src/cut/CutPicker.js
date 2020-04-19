import React from "react"
import { Grid, Button, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { inputCut } from "./CutActions";
import "typeface-roboto";
import { withStyles } from '@material-ui/core/styles';

const Container = withStyles({
    root: {
        marginBottom: 25
    }
})(Grid);

const StyledButton = withStyles({
    label: {
        color: 'white'
    },
})(Button);

const cutPicker = (props) => {
    const handleClick = (cut) => {
        props.inputCut(cut);
    }

    return (
        <React.Fragment>
            <Container item>
                <Grid container direction="column" justify="space-around" alignItems="center">
                    <Grid item>
                        <Typography variant="h6" style={{textAlign: 'center'}}>{props.data.name}</Typography>
                        <Typography variant="h6" style={{textAlign: 'center', color: '#585858'}}>${props.data.price}</Typography>
                    </Grid>
                    <img width={200} height={200} src={props.data.image} alt={props.data.description} />
                    {
                        props.data.available
                        ? (
                            <NavLink to="/customizer">
                                {
                                    props.cut ?.name === props.data.name
                                        ? (
                                            <StyledButton variant="contained" size="large" color="secondary">Selected</StyledButton>
                                        ) : (
                                            <StyledButton variant="contained" size="large" color="primary" onClick={() => handleClick(props.data)}>Available</StyledButton>
                                        )
                            }
                            </NavLink>
                        ) : (
                            <StyledButton variant="contained" size="large" color="primary" disabled>Unavailable</StyledButton>
                        )
                    }
                </Grid>
            </Container>
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        cut: state.cut.cut,
        data: props.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputCut: (cut) => dispatch(inputCut(cut))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(cutPicker)
