import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import { inputFirstName, inputLastName, inputPhoneNumber, inputEmail } from './DetailsAction'

class personalInfo extends Component {
    constructor(props) {
        super(props);
    }

    handleFirstNameText = (event) => {
        this.props.inputFirstName(event.target.value);
    }
    
    handleLastNameText = (event) => {
        this.props.inputLastName(event.target.value);
    }
    
    handlePhoneNumberText = (event) => {
        this.props.inputPhoneNumber(event.target.value);
    }
    
    handleEmailText = (event) => {
        this.props.inputEmail(event.target.value);
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
                <Typography variant="h6">Your Information</Typography>
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
        firstName: state.details.firstName,
        lastName: state.details.lastName,
        email: state.details.email,
        phoneNumber: state.details.phoneNumber
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputFirstName: (text) => dispatch(inputFirstName(text)),
        inputLastName: (text) => dispatch(inputLastName(text)),
        inputEmail: (text) => dispatch(inputEmail(text)), 
        inputPhoneNumber: (text) => dispatch(inputPhoneNumber(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(personalInfo)
