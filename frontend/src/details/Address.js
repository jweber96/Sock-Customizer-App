import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import DropDown from './DropDown'
import {street1, street2, city, state, zip, country } from './DetailsAction'

const states = ["Alabama","Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska",
    "Nevada", "New Hampshire ", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Oklahoma", "Ohio", "Oregon ", "Pennsylvania ", "Rhode Island",
    "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]


class address extends Component {
    constructor(props) {
        super(props);
    }

    handleStreet1Text = (event) => {
        this.props.street1(event.target.value);
    }
    
    handleStreet2Text = (event) => {
        this.props.street2(event.target.value);
    }
    
    handleCityText = (event) => {
        this.props.city(event.target.value);
    }
    
    handleState = (event) => {
        this.props.state(event.target.value);
    }
    
    handleZipText = (event) => {
        this.props.zip(event.target.value);
    }
    
    handleCountry = (event) => {
        this.props.country(event.target.value);
    }

    getZipErrorMessage() {
        const { isZip, isZipValid } = this.props;
        if (!isZipValid) {
            return "Please enter a valid zip"
        } 
        if (!isZip) {
            return "Please enter your zip"
        }

        return ""
    }

    render() {
        const { isStreet, isCity, isState, isZipValid, isCountry, isZip } = this.props;
        return (
            <React.Fragment>
                <Typography variant="subtitle1">Shipping Address</Typography>
                <Grid item xs={8}>
                    <Input error={isStreet} helperText={isStreet ? "" : "Please enter your street"} label="Street" required={true} value={this.props.street1 || ""} onChange={this.handleStreet1Text}/>
                </Grid>
                <Grid item xs={8}>
                    <Input label="Apt/Suite/Other" required={false} value={this.props.street2 || ""} onChange={this.handleStreet2Text}/>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <Input error={isCity} helperText={isCity ? "" : "Please enter your street"} label="City" required={true} value={this.props.city || ""} onChange={this.handleCityText}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Input error={isZipValid && isZip} helperText={this.getZipErrorMessage()}  label="Zip Code" required={true} value={this.props.zip || ""} onChange={this.handleZipText} error={isZip} helperText={isZip ? "" : "Please enter a valid zip code"}/>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <DropDown title="State" options={states} value={this.props.state} onChange={this.handleState}/>
                    </Grid>
                    <Grid item xs={4}>
                        <DropDown title="Country" options={["United States"]} value={this.props.country} onChange={this.handleCountry}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
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
