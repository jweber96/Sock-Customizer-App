import React, {Component} from "react"
import { connect } from "react-redux";
import { GridList, GridListTile, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { pickPrimaryColor, pickSecondaryColor } from "./ColorsActions";
import "typeface-roboto";


class colorsPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    handlePick = event => {
        const color = event.target.children[0].innerHTML;
        const code = event.target.attributes.fill.value;
        const id = event.target.id;
        this.props.isPrimary ? this.props.inputPrimaryColor(color, code) : this.props.inputSecondaryColor(color, code);
        this.updateColors(id);
        this.updatePreview(code);
    }

    handleReset = () => {
        var id = "";
        this.props.isPrimary ? id = "primary_" + this.props.primaryColor : id = "secondary_" + this.props.secondaryColor;
        this.normalize(id);

        this.props.isPrimary ? this.props.inputPrimaryColor(null, null) : this.props.inputSecondaryColor(null, null);
        this.updatePreview();
    }

    updateColors = id => {
        var index = "";
        for (var color in this.props.colors) {
            this.props.isPrimary ? index = "primary_" + color : index = "secondary_" + color;
            this.normalize(index);
        }
        this.identify(id);
    }

    pageLoad = () => {
        var index = "";
        for (var color in this.props.colors) {
            this.props.isPrimary ? index = "primary_" + color : index = "secondary_" + color;
            this.normalize(index);
        }
        if (this.props.primaryColor !== null) {
            var id = "primary_" + this.props.primaryColor;
            this.identify(id);
        }
        if (this.props.secondaryColor !== null) {
            var id = "secondary_" + this.props.secondaryColor;
            this.identify(id);
        }
    }

    normalize = id => {
        var selected = document.getElementById(id);
        if (selected !== null) {
            selected.style.stroke = "black";
            selected.style.strokeWidth = "2";
            selected.style.r = "15";
            selected.style.fillOpacity = "100%";
        }
    }

    identify = id => {
        var selected = document.getElementById(id);
        if (selected !== null) {
            selected.style.stroke = "red";
            selected.style.strokeWidth = "4";
            selected.style.r = "14";
            selected.style.fillOpacity = "80%";
        }
    }

    updatePreview = code => {
        const preview = document.getElementById("preview");
        if (preview) {
            const document = preview.contentDocument;
            if (this.props.isPrimary) {
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

    canShowDelete = () => {
        return this.props.isPrimary ? this.props.primaryColor !== null : this.props.secondaryColor !== null;
    }

    componentDidMount(){
        this.pageLoad()
    };
    
    render() {
        return (
            <React.Fragment>
                {
                    this.props.isPrimary
                    ? (
                        <React.Fragment>
                            <Typography variant="h5">Primary Colors</Typography>
                            <Typography variant="subtitle2">{this.props.primaryColor || "No color picked!"}</Typography>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography variant="h5">Secondary Colors</Typography>
                            <Typography variant="subtitle2">{this.props.secondaryColor || "No color picked!"}</Typography>
                        </React.Fragment>
                    )
                }
                <div style={{width: "500px"}}>
                    <GridList cellHeight={32} cols={13} spacing={5}>
                        {
                            Object.keys(this.props.colors).map((color, index) => (
                                <GridListTile key={index}>
                                    <svg width="32" height="32">
                                    <circle id={this.props.isPrimary ? "primary_" + color : "secondary_" + color} cx="16" cy="16" r="15" stroke="black" strokeWidth="2" onClick={this.handlePick} fill={this.props.colors[color]}>
                                            <Typography variant="subtitle2">{color}</Typography>
                                        </circle>
                                    </svg>
                                </GridListTile>
                            ))
                        }
                    </GridList>
                </div>
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
            </React.Fragment>
        );
    };
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
