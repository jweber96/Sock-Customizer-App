import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import DesignPicker from "./DesignPicker"
import "typeface-roboto";

const design = (props) => {
    return (
        <React.Fragment>
            <h1>Select Design</h1>
            <Grid container direction="column" justify="center" alignItems="center">
                <Grid container direction="row" justify="space-around" alignItems="center" style={{ backgroundColor: '#eff0f1', paddingBottom: 20 }}>
                    {
                        Object.keys(props.designs).map((index) => (
                            <DesignPicker data={props.designs[index]} key={index} />
                        ))
                    }
                </Grid>


            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        designs: state.design.designs
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(design)