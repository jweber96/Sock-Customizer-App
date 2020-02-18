import React from "react"
import { connect } from "react-redux";
import { GridList, GridListTile, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { pickPrimaryColor, pickSecondaryColor } from "./ColorsActions";
import "typeface-roboto";


const colors = (props) => {
    const handlePick = (event) => {
        const color = event.target.children[0].innerHTML;
        const code = event.target.attributes.fill.value;
        props.isPrimary ? props.inputPrimaryColor(color, code) : props.inputSecondaryColor(color, code);
        updatePreview(code);
    }

    const handleReset = () => {
        props.isPrimary ? props.inputPrimaryColor(null, null) : props.inputSecondaryColor(null, null);
        updatePreview();
    }

    const updatePreview = (code) => {
        const preview = document.getElementById("preview");
        if (preview) {
            const document = preview.contentDocument;
            if (props.isPrimary) {
                const primary = document.getElementById("primaryColor");
                primary.style.fill = code || "#000000";
            } else {
                const secondary = document.getElementById("secondaryColor");
                secondary.style.fill = code || "#000000";
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
                    <React.Fragment>
                        <h1>Primary Colors</h1>
                        <p>{props.primaryColor || "No color picked!"}</p>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h1>Secondary Colors</h1>
                        <p>{props.secondaryColor || "No color picked!"}</p>
                    </React.Fragment>
                )
            }
            <GridList cellHeight={32} cols={Object.keys(props.colors).length}>
                {
                    Object.keys(props.colors).map((color, index) => (
                        <GridListTile key={index}>
                            <svg width="32" height="32">
                                <circle cx="16" cy="16" r="16" fill={props.colors[color]} onClick={handlePick}>
                                    <title>{color}</title>
                                </circle>
                            </svg>
                        </GridListTile>
                    ))
                }
            </GridList>
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

export default connect(mapStateToProps, mapDispatchToProps)(colors)
