import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import {firstName, lastName, organization, phoneNumber, email } from './DetailsAction'


class personalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmail: true,
            isPhoneNumber: true
        }
    }

    validateEmail(email) {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return valid.test(email);
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
        // var cleaned = ('' + event.target.value).replace(/\D/g, '')
        // var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        // if (match) {
        //     var number = ['(', match[2], ') ', match[3], '-', match[4]].join('');
        //     this.props.phoneNumber(number);
        //     return null;
        // }
        this.setState({isPhoneNumber: event.target.value.length === 10});
        this.props.phoneNumber(event.target.value);
    }
    
    handleEmailText = (event) => {
        this.setState({isEmail: this.validateEmail(event.target.value)});
        this.props.email(event.target.value);
    }
    
    render() {
        const { isEmail, isPhoneNumber } = this.state
        return (
            <React.Fragment>
                <Typography variant="subtitle1">Personal Information</Typography>
                <Grid container direction="row">
                    <Input label="First Name" required={true} value={this.props.firstName || ""} onChange={this.handleFirstNameText}/>
                    <Input label="Last Name" required={true} value={this.props.lastName || ""} onChange={this.handleLastNameText}/>
                </Grid>
                <Grid container direction="row">
                    <Input error={isEmail} label="Email" required={true} value={this.props.email || ""} onChange={this.handleEmailText} />
                    <Input error={isPhoneNumber} label="Phone Number" required={true} value={this.props.phoneNumber || ""} onChange={this.handlePhoneNumberText} />
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
