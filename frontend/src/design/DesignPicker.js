import React from "react"
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { inputDesign } from "./DesignActions";
import "typeface-roboto";


const designPicker = (props) => {
    // const handleClick = (design) => {
    //     props.inputDesign(design);
    // }

    return (
        <React.Fragment>
            <Grid key={props.key}>
                <Grid item container>
                    <h2>{props.data.name}</h2>
                </Grid>
                <Grid>
                    <img width={150} height={150} src={props.data.image} alt={props.data.description} />
                </Grid>
                <Grid>
                    <Button variant="contained" size="large" color="secondary" disabled={true}>UNAVAILABLE</Button>
                    {/* <Button variant="contained" size="large" color="primary" onClick={() => handleClick(props.data)}>Available</Button> */}
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        key: props.key,
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
