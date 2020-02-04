import React from "react"
import { Grid, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { connect } from "react-redux";
import { inputText, resetText } from "./TextActions";
import "typeface-roboto";

const text = (props) => {
    const handleInput = (event) => {
        props.inputText(event.target.value);
    }

    const handleReset = () => {
        props.resetText();
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
            <h1>Text</h1>
            <TextField label="Enter sock text!" variant="outlined" value={props.text} onChange={handleInput} />
            {
                props.text.length === 0
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
        text: state.textState.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputText: (text) => dispatch(inputText(text)),
        resetText: () => dispatch(resetText())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(text)
