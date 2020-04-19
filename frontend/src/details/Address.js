import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import DropDown from './DropDown'
import { inputStreet1, inputStreet2, inputCity, inputState, inputZip, inputCountry } from './DetailsAction'

const states = ["Alabama","Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
    "Nevada", "New Hampshire ", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Oklahoma", "Ohio", "Oregon ", "Pennsylvania ", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]


const address = (props) => {
    const { isStreet, isCity, isState, isZipValid, isCountry, isZip } = props;

    const handleStreet1Text = (event) => {
        props.inputStreet1(event.target.value);
    }
    
    const handleStreet2Text = (event) => {
        props.inputStreet2(event.target.value);
    }
    
    const handleCityText = (event) => {
        props.inputCity(event.target.value);
    }
    
    const handleState = (event) => {
        props.inputState(event.target.value);
    }
    
    const handleZipText = (event) => {
        props.inputZip(event.target.value);
    }
    
    const handleCountry = (event) => {
        props.inputCountry(event.target.value);
    }

    const getZipErrorMessage = () => {
        const { isZip, isZipValid } = props;
        if (!isZipValid) {
            return "Please enter a valid zip"
        } 
        if (!isZip) {
            return "Please enter your zip"
        }
        return ""
    }

    return (
        <React.Fragment>
            <Typography variant="h6">Shipping Address</Typography>
            <Grid item xs={8}>
                <Input error={isStreet} helperText={isStreet ? "" : "Please enter your street"} label="Street" required={true} value={props.street1 || ""} onChange={handleStreet1Text}/>
            </Grid>
            <Grid item xs={8}>
                <Input label="Apt/Suite/Other" required={false} value={props.street2 || ""} onChange={handleStreet2Text}/>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={4}>
                    <Input error={isCity} helperText={isCity ? "" : "Please enter your city"} label="City" required={true} value={props.city || ""} onChange={handleCityText}/>
                </Grid>
                <Grid item xs={4}>
                    <Input error={isZipValid && isZip} helperText={getZipErrorMessage()}  label="Zip Code" required={true} value={props.zip || ""} onChange={handleZipText} error={isZip} helperText={isZip ? "" : "Please enter a valid zip code"}/>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item xs={4}>
                    <DropDown title="State" options={states} value={props.state} onChange={handleState}/>
                </Grid>
                <Grid item xs={4}>
                    <DropDown title="Country" options={["United States"]} value={props.country} onChange={handleCountry}/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        street1: state.details.street1,
        street2: state.details.street2,
        city: state.details.city,
        zip: state.details.zip,
        state: state.details.state,
        country: state.details.country
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputStreet1: (text) => dispatch(inputStreet1(text)),
        inputStreet2: (text) => dispatch(inputStreet2(text)),
        inputCity: (text) => dispatch(inputCity(text)), 
        inputZip: (text) => dispatch(inputZip(text)),
        inputState: (text) => dispatch(inputState(text)),
        inputCountry: (text) => dispatch(inputCountry(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(address)
