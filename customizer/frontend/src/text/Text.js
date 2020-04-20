import React, {Component} from "react"
import { connect } from "react-redux";
import { Grid, IconButton, TextField, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { inputToeText, inputBrimText, resetAllText } from "./TextActions";
import "typeface-roboto";
import { withStyles } from '@material-ui/core/styles';

const StyledTextContainer = withStyles({
    root: {
        marginTop: 15,
        width: '45%'
    }
})(TextField);

class text extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handleToeText = event => {
        this.props.inputToeText(event.target.value);
        this.updatePreview(true, event.target.value);
        this.showColorWarning();
    }

    handleBrimText = event => {
        this.props.inputBrimText(event.target.value);
        this.updatePreview(false, event.target.value);
        this.showColorWarning();
    }

    showColorWarning = () => {
        var txt = document.getElementById("text_color");
        if (this.props.primaryColorCode == this.props.secondaryColorCode) {
            txt.style.display = "block";
        } else {
            txt.style.display = "none";
        }
    }

    handleReset = () => {
        this.props.resetText();
        this.updatePreview(true);
        this.updatePreview(false);
    }

    updatePreview = (isToe, text) => {
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

    canShowDelete = () => {
        return (
            this.props.toeText !== null ||
            this.props.brimText !== null
        );
    }

    componentDidMount(){
        this.showColorWarning()
    };

    render() {
        return (
            <React.Fragment>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Typography variant="h5">Add Text</Typography>
                    <StyledTextContainer inputProps={{ maxLength: 14 }} label="Brim Text" variant="outlined" value={this.props.brimText || ""} onChange={this.handleBrimText} />
                    <StyledTextContainer inputProps={{ maxLength: 14 }} label="Toe Text" variant="outlined" value={this.props.toeText || ""} onChange={this.handleToeText} />
                    <Grid item>
                        {
                            !this.canShowDelete()
                                ? (
                                    <IconButton disabled>
                                        <DeleteIcon fontSize="large" />
                                    </IconButton>
                                ) : (
                                    <IconButton onClick={this.handleReset}>
                                        <DeleteIcon fontSize="large" />
                                    </IconButton>
                                )
                        }
                    </Grid>
                    <div id="text_color" style={{display: "none"}}>
                        Note: Text may not be visible with current color selections.
                    </div>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        toeText: state.text.toeText,
        brimText: state.text.brimText,
        primaryColorCode: state.colors.primaryColorCode,
        secondaryColorCode: state.colors.secondaryColorCode,
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
