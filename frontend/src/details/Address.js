import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'
import {street1, street2, city, state, zip, country } from './DetailsAction'

class address extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const handleStreet1Text = (event) => {
            this.props.street1(event.target.value);
        }

        const handleStreet2Text = (event) => {
            this.props.street2(event.target.value);
        }

        const handleCityText = (event) => {
            this.props.city(event.target.value);
        }

        const handleStateText = (event) => {
            this.props.state(event.target.value);
        }

        const handleZipText = (event) => {
            this.props.zip(event.target.value);
        }
        
        const handleCountryText = (event) => {
            this.props.country(event.target.value);
        }

        return (
            <React.Fragment>
                <Typography variant="subtitle1">Address</Typography>
                <Input label="Street" required={true} value={this.props.street1 || ""} onChange={handleStreet1Text}/>
                <Input label="Apt/Suite/Other" required={false} value={this.props.street2 || ""} onChange={handleStreet2Text}/>
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <Input label="City" required={true} value={this.props.city || ""} onChange={handleCityText}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Zip" required={true} value={this.props.zip || ""} onChange={handleZipText}/>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={6}>
                        <Input label="State" required={true} value={this.props.state || ""} onChange={handleStateText}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Input label="Country" required={true} value={this.props.country || ""} onChange={handleCountryText}/>
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
