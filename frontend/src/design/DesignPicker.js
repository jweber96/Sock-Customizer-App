import React from "react"
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
//import { NavLink } from "react-router-dom";
import { inputDesign } from "./DesignActions";
import "typeface-roboto";


const designPicker = (props) => {
    // const handleClick = (design) => {
    //     props.inputDesign(design);
    // }

    return (
        <React.Fragment>
            <div style={{ padding: 20 }}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item>
                        <h2>{props.data.name}</h2>
                    </Grid>
                    <Grid item>
                        <img width={150} height={150} src={props.data.image} alt={props.data.description} />
                    </Grid>
                    <Grid item>
                        <Button variant="contained" size="large" color="secondary" disabled="true">UNAVAILABLE</Button>
                        {/* <Button variant="contained" size="large" color="primary" onClick={() => handleClick(props.data)}>Available</Button> */}
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        design: state.design.design,
        data: props.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputDesign: (design) => dispatch(inputDesign(design))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(designPicker)
