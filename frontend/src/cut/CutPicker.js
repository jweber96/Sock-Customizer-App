import React from "react"
import { Grid, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { inputCut} from "./CutActions";
import "typeface-roboto";


const cutPicker = (props) => {
    const handleClick = (cut) => {
        props.inputCut(cut);
    }

    return (
        <React.Fragment>
            <Grid item sm container>
                <Grid item container direction="column" justify="space-around" alignItems="center" spacing={2}>
                    <Grid item>
                        <h2>{props.data.name} - ${props.data.price}</h2>
                    </Grid>
                    <Grid item>
                        <img src={props.data.image} alt={props.data.description} />
                    </Grid>
                    <Grid item>
                        {
                            props.data.available
                            ? (
                                <NavLink to="/customizer">
                                    {
                                        props.cut === props.data.name
                                        ? (
                                            <Button variant="contained" size="large" color="secondary">Selected</Button>
                                        ) : (
                                            <Button variant="contained" size="large" color="primary" onClick={() => handleClick(props.data.name)}>Available</Button>
                                        )
                                    }
                                </NavLink>
                            ) : (
                                <Button variant="contained" size="large" color="primary" disabled>Unavailable</Button>
                            )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        cut: state.cut.cut,
        data: props.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputCut: (cut) => dispatch(inputCut(cut))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(cutPicker)
