import React from "react"
import { Grid } from "@material-ui/core";
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
            <div style={{ padding: 0 }}>
                <Grid item sm container>
                    <Grid item container direction="row" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item>
                            <h2>{props.data.name}</h2>
                        </Grid>
                        <Grid item>
                            <img width={200} height={200} src={props.data.image} alt={props.data.description} />
                        </Grid>
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
