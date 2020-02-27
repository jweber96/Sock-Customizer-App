import React from "react"
import { connect } from "react-redux";
import { Grid, IconButton, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { inputToeText, inputBrimText, resetAllText } from "./TextActions";
import "typeface-roboto";

const text = (props) => {
    const handleToeText = (event) => {
        props.inputToeText(event.target.value);
        updatePreview(true, event.target.value);
    }

    const handleBrimText = (event) => {
        props.inputBrimText(event.target.value);
        updatePreview(false, event.target.value);
    }

    const handleReset = () => {
        props.resetText();
        updatePreview(true);
        updatePreview(false);
    }

    const updatePreview = (isToe, text) => {
        const preview = document.getElementById("preview");
        if (preview) {
            const document = preview.contentDocument;
            if (isToe) {
                const toeText = document.getElementById("toeText");
                toeText.innerHTML = text || "";
            } else {
                const brimText = document.getElementById("brimText");
                brimText.innerHTML = text || "";
            }
        }
    }

    const canShowDelete = () => {
        return (
            props.toeText !== null ||
            props.brimText !== null
        );
    }

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid item style={{padding: "8px"}}>
                    <TextField label="Toe Text" variant="outlined" value={props.toeText || ""} onChange={handleToeText} />
                </Grid>
                <Grid item style={{padding: "8px"}}>
                    <TextField label="Brim Text" variant="outlined" value={props.brimText || ""} onChange={handleBrimText} />
                </Grid>
                <Grid item>
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
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        toeText: state.text.toeText,
        brimText: state.text.brimText
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputToeText: (text) => dispatch(inputToeText(text)),
        inputBrimText: (text) => dispatch(inputBrimText(text)),
        resetText: () => dispatch(resetAllText())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(text)
