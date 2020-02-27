import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import DesignPicker from "./DesignPicker"
import "typeface-roboto";

const design = (props) => {
    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Select Design</h1>
                <Grid container >
                    <DesignPicker data={props.designs[0]} key={0} />
                    <DesignPicker data={props.designs[1]} key={1} />
                    <DesignPicker data={props.designs[2]} key={2} />
                </Grid>
                <Grid container >
                    <DesignPicker data={props.designs[3]} key={3} />
                    <DesignPicker data={props.designs[4]} key={4} />
                    <DesignPicker data={props.designs[5]} key={5} />
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