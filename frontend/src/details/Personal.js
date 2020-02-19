import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'
import {firstName, lastName, organization, phoneNumber, email } from './DetailsAction'


class personalInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const handleFirstNameText = (event) => {
            this.props.firstName(event.target.value);
        }

        const handleLastNameText = (event) => {
            this.props.lastName(event.target.value);
        }

        const handleOrganizationText = (event) => {
            this.props.organization(event.target.value);
        }

        const handlePhoneNumberText = (event) => {
            this.props.phoneNumber(event.target.value);
        }

        const handleEmailText = (event) => {
            this.props.email(event.target.value);
        }

        return (
            <React.Fragment>
                <Typography variant="subtitle1">Personal Information</Typography>
                <Grid container direction="row">
                    <Input label="First Name" required={true} value={this.props.firstName || ""} onChange={handleFirstNameText}/>
                    <Input label="Last Name" required={true} value={this.props.lastName || ""} onChange={handleLastNameText}/>
                </Grid>
                <Grid container direction="row">
                    <Input label="Email" required={true} value={this.props.email || ""} onChange={handleEmailText} />
                    <Input label="Phone Number" required={true} value={this.props.phoneNumber || ""} onChange={handlePhoneNumberText} />
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
