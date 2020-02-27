import React from "react"
import { connect } from "react-redux";
import { Grid, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { pickPrimaryColor, pickSecondaryColor } from "./ColorsActions";
import "typeface-roboto";


const colorsPicker = (props) => {
    const handlePick = (event) => {
        const color = event.target.children[0].innerHTML;
        const code = event.target.attributes.fill.value;
        const id = event.target.id;
        props.isPrimary ? props.inputPrimaryColor(color, code) : props.inputSecondaryColor(color, code);
        updateColors(id);
        updatePreview(code);
    }

    const handleReset = () => {
        var id = "";
        props.isPrimary ? id = "primary_" + props.primaryColor : id = "secondary_" + props.secondaryColor;
        normalize(id);

        props.isPrimary ? props.inputPrimaryColor(null, null) : props.inputSecondaryColor(null, null);
        updatePreview();
    }

    const updateColors = (id) => {
        var index = "";
        for (var color in props.colors) {
            props.isPrimary ? index = "primary_" + color : index = "secondary_" + color;
            normalize(index);
        }
        identify(id);
    }

    const normalize = (id) => {
        var selected = document.getElementById(id);
        selected.style.stroke = "black";
        selected.style.strokeWidth = "2";
        selected.style.r = "15";
        selected.style.fillOpacity = "100%";
    }

    const identify = (id) => {
        var selected = document.getElementById(id);
        selected.style.stroke = "red";
        selected.style.strokeWidth = "4";
        selected.style.r = "14";
        selected.style.fillOpacity = "80%";
    }

    const updatePreview = (code) => {
        const preview = document.getElementById("preview");
        if (preview) {
            const document = preview.contentDocument;
            if (props.isPrimary) {
                const primaryColor = document.getElementById("primaryColor");
                primaryColor.style.fill = code || "#000000";
            } else {
                const secondaryColor = document.getElementById("secondaryColor");
                secondaryColor.style.fill = code || "#000000";

                const toeText = document.getElementById("toeText");
                toeText.style.fill = code || "#000000";

                const brimText = document.getElementById("brimText");
                brimText.style.fill = code || "#000000";
            }
        }
    }

    const canShowDelete = () => {
        return props.isPrimary ? props.primaryColor !== null : props.secondaryColor !== null;
    }

    return (
        <React.Fragment>
            {
                props.isPrimary
                ? (
                    <div>
                        <h1>Primary Colors</h1>
                        <p>{props.primaryColor || "No color picked!"}</p>
                    </div>
                ) : (
                    <div>
                        <h1>Secondary Colors</h1>
                        <p>{props.secondaryColor || "No color picked!"}</p>
                    </div>
                )
            }
            <Grid container direction="row" justify="center" alignItems="center" cols={13}>
                {
                    Object.keys(props.colors).map((color, index) => (
                        <Grid item key={index}>
                            <svg width="32" height="32">
                            <circle id={props.isPrimary ? "primary_" + color : "secondary_" + color} cx="16" cy="16" r="15" stroke="black" strokeWidth="2" onClick={handlePick} fill={props.colors[color]}>
                                    <title>{color}</title>
                                </circle>
                            </svg>
                        </Grid>
                    ))
                }
            </Grid>
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
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        primaryColor: state.colors.primaryColor,
        primaryColorCode: state.colors.primaryColorCode,
        secondaryColor: state.colors.secondaryColor,
        secondaryColorCode: state.colors.secondaryColorCode,
        colors: state.colors.colors,
        isPrimary: props.isPrimary
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputPrimaryColor: (color, code) => dispatch(pickPrimaryColor(color, code)),
        inputSecondaryColor: (color, code) => dispatch(pickSecondaryColor(color, code))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(colorsPicker)