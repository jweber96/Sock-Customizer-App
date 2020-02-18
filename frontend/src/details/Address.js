import React from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'
import {street1, street2, city, state, zip, country } from './DetailsAction'

const address = (props) => {

    const handleStreet1Text = (event) => {
        props.street1(event.target.value);
    }

    const handleStreet2Text = (event) => {
        props.street2(event.target.value);
    }

    const handleCityText = (event) => {
        props.city(event.target.value);
    }

    const handleStateText = (event) => {
        props.state(event.target.value);
    }

    const handleZipText = (event) => {
        props.zip(event.target.value);
    }
    
    const handleCountryText = (event) => {
        props.country(event.target.value);
    }

    return (
        <React.Fragment>
            <Typography variant="subtitle1">Address</Typography>
            <Grid item xs={12}>
                <Input label="Street" required={true} value={props.street1 || ""} onChange={handleStreet1Text}/>
            </Grid>
            <Grid item xs={12}>
                <Input label="Apt/Suite/Other" required={false} value={props.street2 || ""} onChange={handleStreet2Text}/>
            </Grid>
            <Grid container direction="row">
                <Grid item spacing={2}>
                    <Input label="City" required={true} value={props.city || ""} onChange={handleCityText}/>
                </Grid>
                <Grid item spacing={2}>
                    <Input label="Zip" required={true} value={props.zip || ""} onChange={handleZipText}/>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item spacing={2}>
                    <Input label="State" required={true} value={props.state || ""} onChange={handleStateText}/>
                </Grid>
                <Grid item spacing={2}>
                    <Input label="Country" required={true} value={props.country || ""} onChange={handleCountryText}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        street1: state.text.street1,
        street2: state.text.street2,
        city: state.text.city,
        zip: state.text.zip,
        state: state.text.state,
        country: state.text.country
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        street1: (text) => dispatch(street1(text)),
        street2: (text) => dispatch(street2(text)),
        city: (text) => dispatch(city(text)), 
        zip: (text) => dispatch(zip(text)),
        state: (text) => dispatch(state(text)),
        country: (text) => dispatch(country(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(address)
