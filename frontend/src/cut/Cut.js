import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import CutPicker from "./CutPicker";
import "typeface-roboto";


const cut = (props) => {
    return (
        <React.Fragment>
            <h1>Select Cut Length</h1>
            <Grid container direction="row" justify="space-around" alignItems="center" style={{ backgroundColor: '#eff0f1', paddingBottom: 20 }}>
                {
                    Object.keys(props.cuts).map((index) => (
                        <CutPicker data={props.cuts[index]} key={index} />
                    ))
                }
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        cuts: state.cut.cuts
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(cut)
