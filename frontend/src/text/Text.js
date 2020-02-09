import React from "react"
import { Grid, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { inputToePrimaryText, inputToeSecondaryText, inputBrimPrimaryText, inputBrimSecondaryText, resetAllText } from "./TextActions";
import "typeface-roboto";

const text = (props) => {
    const handleToePrimaryText = (event) => {
        props.inputToePrimaryText(event.target.value);
    }

    const handleToeSecondaryText = (event) => {
        props.inputToeSecondaryText(event.target.value);
    }

    const handleBrimPrimaryText = (event) => {
        props.inputBrimPrimaryText(event.target.value);
    }

    const handleBrimSecondaryText = (event) => {
        props.inputBrimSecondaryText(event.target.value);
    }

    const handleReset = () => {
        props.resetText();
    }

    const canShowDelete = () => {
        return (
            props.toePrimaryText !== null ||
            props.toeSecondaryText !== null ||
            props.brimPrimaryText !== null ||
            props.brimSecondaryText !== null
        );
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
            <h1>Text</h1>
            <TextField label="Toe Primary Text" variant="standard" value={props.toePrimaryText || ""} onChange={handleToePrimaryText} />
            <TextField label="Toe Secondary Text" variant="standard" value={props.toeSecondaryText || ""} onChange={handleToeSecondaryText} />
            <TextField label="Brim Primary Text" variant="standard" value={props.brimPrimaryText || ""} onChange={handleBrimPrimaryText} />
            <TextField label="Brim Secondary Text" variant="standard" value={props.brimSecondaryText || ""} onChange={handleBrimSecondaryText} />
            {
                !canShowDelete()
                ? (
                    <IconButton disabled>
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                ) : (
                    <IconButton onClick={handleReset}>
                        <DeleteIcon fontSize="large" />
                    </IconButton>
                )
            }
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        toePrimaryText: state.text.toePrimaryText,
        toeSecondaryText: state.text.toeSecondaryText,
        brimPrimaryText: state.text.brimPrimaryText,
        brimSecondaryText: state.text.brimSecondaryText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputToePrimaryText: (text) => dispatch(inputToePrimaryText(text)),
        inputToeSecondaryText: (text) => dispatch(inputToeSecondaryText(text)),
        inputBrimPrimaryText: (text) => dispatch(inputBrimPrimaryText(text)),
        inputBrimSecondaryText: (text) => dispatch(inputBrimSecondaryText(text)),
        resetText: () => dispatch(resetAllText())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(text)
