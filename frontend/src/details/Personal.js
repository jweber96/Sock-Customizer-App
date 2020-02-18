import React from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input'
import {firstName, lastName, organization, phoneNumber, email } from './DetailsAction'


const personalInfo = (props) => {

    const handleFirstNameText = (event) => {
        props.firstName(event.target.value);
    }

    const handleLastNameText = (event) => {
        props.lastName(event.target.value);
    }

    const handleOrganizationText = (event) => {
        props.organization(event.target.value);
    }

    const handlePhoneNumberText = (event) => {
        props.phoneNumber(event.target.value);
    }

    const handleEmailText = (event) => {
        props.email(event.target.value);
    }

    return (
        <React.Fragment>
            <Typography variant="subtitle1">Personal Information</Typography>
            <Grid container direction="row">
                <Grid item spacing={2}>
                    <Input label="First Name" required={true} value={props.firstName || ""} onChange={handleFirstNameText}/>
                </Grid>
                <Grid spacing={2}>
                    <Input label="Last Name" required={true} value={props.lastName || ""} onChange={handleLastNameText}/>
                </Grid>
            </Grid>
            <Grid container direction="row">
                <Grid item spacing={2}>
                    <Input label="Email" required={true} value={props.email || ""} onChange={handleEmailText} />
                </Grid>
                <Grid item spacing={2}>
                    <Input label="Phone Number" required={true} value={props.phoneNumber || ""} onChange={handlePhoneNumberText} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
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
