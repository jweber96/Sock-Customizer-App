import React from "react"
import { connect } from "react-redux";
import { Input, IconButton, Grid, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { inputLogo, resetLogo } from "./LogoActions";
import "typeface-roboto";

const logo = (props) => {
    const updatePreview = (image) => {
        const preview = document.getElementById("preview");
        if (preview) {
            const content = preview.contentDocument;

            const logoImage = content.getElementById("logo");
            logoImage.setAttribute("href", image ?? "");
        }
    }

    const handleInput = (event) => {
        const image = URL.createObjectURL(event.target.files[0])
        props.inputLogo(image);
        updatePreview(image);
    }

    const handleReset = () => {
        props.resetLogo();
        updatePreview(null);
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
            <Typography variant="h5">Add Logo</Typography>
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
                        <Input type="file" accept="image/*" onChange={handleInput} />
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
        logo: state.logo.logo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputLogo: (logo) => dispatch(inputLogo(logo)),
        resetLogo: () => dispatch(resetLogo())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(logo)