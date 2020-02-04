import React from "react"
import { IconButton, Grid } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { inputLogo, resetLogo } from "./LogoActions";
import "typeface-roboto";

const logo = (props) => {
    const handleInput = (event) => {
        props.inputLogo(URL.createObjectURL(event.target.files[0]));
    }

    const handleReset = () => {
        props.resetLogo();
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
            <h1>Logo</h1>
            {
                props.logo !== null
                ? (
                    <React.Fragment>
                        <img src={props.logo} alt="Logo" width="256" height="256" />
                        <IconButton onClick={handleReset}>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <input type="file" accept="image/*" onChange={handleInput} />
                        <IconButton disabled>
                            <DeleteIcon fontSize="large" />
                        </IconButton>
                    </React.Fragment>
                )
            }
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        logo: state.logoState.logo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputLogo: (logo) => dispatch(inputLogo(logo)),
        resetLogo: () => dispatch(resetLogo())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(logo)