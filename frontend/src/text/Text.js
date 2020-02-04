import React from "react"
import { Grid, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { inputToeFirstLineText, inputToeSecondLineText, inputBrimFirstLineText, inputBrimSecondLineText, resetText } from "./TextActions";
import "typeface-roboto";

const text = (props) => {
    const handleToeFirstLineText = (event) => {
        props.inputToeFirstLineText(event.target.value);
    }

    const handleToeSecondLineText = (event) => {
        props.inputToeSecondLineText(event.target.value);
    }

    const handleBrimFirstLineText = (event) => {
        props.inputBrimFirstLineText(event.target.value);
    }

    const handleBrimSecondLineText = (event) => {
        props.inputBrimSecondLineText(event.target.value);
    }

    const handleReset = () => {
        props.resetText();
    }

    const canShowDelete = () => {
        return (
            props.toeFirstLineText.length > 0 ||
            props.toeSecondLineText.length > 0 ||
            props.brimFirstLineText.length > 0 ||
            props.brimSecondLineText.length > 0
        );
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
            <h1>Text</h1>
            <TextField label="Toe first line text!" variant="standard" value={props.toeFirstLineText} onChange={handleToeFirstLineText} />
            <TextField label="Toe second line text!" variant="standard" value={props.toeSecondLineText} onChange={handleToeSecondLineText} />
            <TextField label="Brim first line text!" variant="standard" value={props.brimFirstLineText} onChange={handleBrimFirstLineText} />
            <TextField label="Brim second line text!" variant="standard" value={props.brimSecondLineText} onChange={handleBrimSecondLineText} />
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
        toeFirstLineText: state.textState.toeFirstLineText,
        toeSecondLineText: state.textState.toeSecondLineText,
        brimFirstLineText: state.textState.brimFirstLineText,
        brimSecondLineText: state.textState.brimSecondLineText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputToeFirstLineText: (text) => dispatch(inputToeFirstLineText(text)),
        inputToeSecondLineText: (text) => dispatch(inputToeSecondLineText(text)),
        inputBrimFirstLineText: (text) => dispatch(inputBrimFirstLineText(text)),
        inputBrimSecondLineText: (text) => dispatch(inputBrimSecondLineText(text)),
        resetText: () => dispatch(resetText())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(text)
