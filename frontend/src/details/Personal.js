import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import {firstName, lastName, organization, phoneNumber, email } from './DetailsAction'


class personalInfo extends Component {
    constructor(props) {
        super(props);
    }

    handleFirstNameText = (event) => {
        this.props.firstName(event.target.value);
    }
    
    handleLastNameText = (event) => {
        this.props.lastName(event.target.value);
    }
    
    handleOrganizationText = (event) => {
        this.props.organization(event.target.value);
    }
    
    handlePhoneNumberText = (event) => {
        this.props.phoneNumber(event.target.value);
    }
    
    handleEmailText = (event) => {
        this.props.email(event.target.value);
    }

    getPhoneNumberErrorMessage() {
        const { isPhoneNumber, isPhoneNumberValid } = this.props;
        if (!isPhoneNumberValid) {
            return "Please enter a valid phone number"
        } 
        if (!isPhoneNumber) {
            return "Please enter your phone number"
        }

        return ""
    }

    getEmailErrorMessage() {
        const { isEmail, isEmailValid } = this.props;
        if (!isEmailValid) {
            return "Please enter a valid email"
        } 
        if (!isEmail) {
            return "Please enter your email"
        }

        return ""
    }


    render() {
        const { isFirstName, isLastName, isEmail, isPhoneNumber, isEmailValid, isPhoneNumberValid } = this.props;
        return (
            <React.Fragment>
                <Typography variant="subtitle1">Personal</Typography>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <Input error={isFirstName} helperText={isFirstName ? "" : "Please enter your first name"} label="First Name" required={true} value={this.props.firstName || ""} onChange={this.handleFirstNameText}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Input error={isLastName} helperText={isLastName ? "" : "Please enter your last name"} label="Last Name" required={true} value={this.props.lastName || ""} onChange={this.handleLastNameText}/>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item xs={4}>
                        <Input error={isEmailValid && isEmail} helperText={this.getEmailErrorMessage()} label="Email" required={true} value={this.props.email || ""} onChange={this.handleEmailText} />
                    </Grid>
                    <Grid item xs={4}>
                        <Input error={isPhoneNumberValid && isPhoneNumber} helperText={this.getPhoneNumberErrorMessage()} label="Phone Number" required={true} value={this.props.phoneNumber || ""} onChange={this.handlePhoneNumberText} />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        firstName: state.text.firstName,
        lastName: state.text.lastName,
        email: state.text.email,
        phoneNumber: state.text.phoneNumber
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        firstName: (text) => dispatch(firstName(text)),
        lastName: (text) => dispatch(lastName(text)),
        email: (text) => dispatch(email(text)), 
        phoneNumber: (text) => dispatch(phoneNumber(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(personalInfo)
