import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import DropDown from './DropDown'
import {street1, street2, city, state, zip, country } from './DetailsAction'


class address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isZip: true,
        }
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
    
    handleStateText = (event) => {
        this.props.state(event.target.value);
    }
    
    handleZipText = (event) => {
        this.setState({isZip: event.target.value.length === 5});
        this.props.zip(event.target.value);
        this.confirmErrors()
    }
    
    handleCountryText = (event) => {
        this.props.country(event.target.value);
    }

    confirmErrors = () => {
        const { isZip } = this.state
        if (isZip) {
            this.props.addressErrors()
        }
    }

    render() {
        const { isZip } = this.state;
        return (
            <React.Fragment>
                <Typography variant="subtitle1">Address</Typography>
                <Grid item xs={8}>
                    <Input label="Street" required={true} value={this.props.street1 || ""} onChange={this.handleStreet1Text}/>
                </Grid>
                <Grid item xs={8}>
                    <Input label="Apt/Suite/Other" required={false} value={this.props.street2 || ""} onChange={this.handleStreet2Text}/>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <Input label="City" required={true} value={this.props.city || ""} onChange={this.handleCityText}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Input label="Zip" required={true} value={this.props.zip || ""} onChange={this.handleZipText} error={isZip}/>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <Input label="State" required={true} value={this.props.state || ""} onChange={this.handleStateText}/>
                    </Grid>
                    <Grid item xs={4}>
                        <DropDown title="Country" option1="United States" onChange={this.handleCountry}/>
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
