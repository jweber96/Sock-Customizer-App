import React from "react"
import { GridList, GridListTile } from "@material-ui/core";
import { connect } from "react-redux";
import { pickPrimaryColor, pickSecondaryColor } from "./ColorsActions";
import "typeface-roboto";


const colors = (props) => {
    const handlePick = (event) => {
        const color = event.target.children[0].innerHTML;
        const code = event.target.attributes.fill.value;
        props.isPrimary ? props.inputPrimaryColor(color, code) : props.inputSecondaryColor(color, code);
    }

    return (
        <React.Fragment>
            {
                props.isPrimary
                ? (
                    <React.Fragment>
                        <h1>Primary Colors</h1>
                        {
                            props.primaryColor === ""
                            ? (
                                <p>No color picked!</p>
                            ) : (
                                <p>{props.primaryColor}</p>
                            )
                        }
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h1>Secondary Colors</h1>
                        {
                            props.secondaryColor === ""
                            ? (
                                <p>No color picked!</p>
                            ) : (
                                <p>{props.secondaryColor}</p>
                            )
                        }
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
        inputPrimaryColor: (color) => dispatch(pickPrimaryColor(color)),
        inputSecondaryColor: (color) => dispatch(pickSecondaryColor(color))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(colors)
