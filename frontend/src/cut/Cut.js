import React from "react"
import { Grid, Paper } from "@material-ui/core";
import { connect } from "react-redux";
import CutPicker from "./CutPicker";
import "typeface-roboto";


const cut = (props) => {
    return (
        <React.Fragment>
            <Paper variant="outlined" square style={{ backgroundColor: "#eff0f1", margin: "20px"}}>
                <Grid container justify="center" alignItems="center">
                    <h1>Select Cut Length</h1>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center" style={{margin: "20px"}}>
                    {
                        Object.keys(props.cuts).map((index) => (
                            <CutPicker data={props.cuts[index]} key={index} />
                        ))
                    }
                </Grid>
            </Paper>
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
