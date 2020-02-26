import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import DesignPicker from "./DesignPicker"
import "typeface-roboto";

const design = (props) => {
    return (
        <React.Fragment>

            <Grid container direction="column" justify="space-around" alignItems="center" style={{ backgroundColor: '#eff0f1', paddingBottom: 20 }}>
                <h1>Select Design</h1>
                <Grid container direction="row">
                    {<DesignPicker data={props.designs[0]} />}
                    {<DesignPicker data={props.designs[1]} />}
                    {<DesignPicker data={props.designs[2]} />}
                </Grid>
                <Grid container direction="row">
                    {<DesignPicker data={props.designs[3]} />}
                    {<DesignPicker data={props.designs[4]} />}
                    {<DesignPicker data={props.designs[5]} />}
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