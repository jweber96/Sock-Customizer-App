import React, { Component } from "react"
import { connect } from "react-redux";
import { Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonalInfo from './Personal'
import Address from './Address'
import Sizes from './Sizes'
import 'typeface-roboto';
import moment from 'moment';

const { uuid } = require('uuidv4');

const Container = withStyles({
    root: {
        marginLeft: '20%'
    }
})(Grid);

const Shift = withStyles({
    root: {
        marginTop: 15,
    }
})(Grid);

const StyledButton = withStyles({
    root: {
        width: '20%'
    }
})(Button);

class details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFirstName: true,
            isLastName: true,
            isPhoneNumber: true,
            isEmail: true,
            isEmailValid: true,
            isPhoneNumberValid: true,
            isStreet: true,
            isState: true,
            isCity: true,
            isZip: true,
            isZipValid: true,
            isCountry: true,
            userId: -1,
            customerId: -1,
            orderId: -1
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ feedback: event.target.value })
    }

    handleSubmit(event) {
        const templateId = 'template_sD1dx3I6';

        this.sendFeedback(templateId,
            {
                first_name: this.props.details.firstName,
                last_name: this.props.details.lastName,
                street1: this.props.details.street1,
                street2: this.props.details.street2,
                city: this.props.details.city,
                state: this.props.details.state,
                zip: this.props.details.zip,
                country: this.props.details.country,
                email: this.props.details.email,
                phone_number: this.props.details.phone_number,
                youth: this.props.details.youth,
                small: this.props.details.small,
                medium: this.props.details.medium,
                large: this.props.details.large,
                primary_color: this.props.colors.primaryColorCode,
                secondary_color: this.props.colors.secondaryColorCode,
                toe_primary_text: this.props.text.toeText,
                brim_primary_text: this.props.text.brimText,
                logo: this.props.logo.inputLogo,
                added_at: moment(),
                cut: this.props.cut.cut.name,
            })
    }

    sendFeedback(templateId, variables) {
        window.emailjs.send(
            'default_service', templateId,
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    validateEmail(email) {
        const valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return valid.test(email);
    }

    validatePhoneNumber(number) {
        if (number !== null) {
            if (number.length === 10) {
                return true;
            }
        }
        return false;
    }

    validateZip(number) {
        if (number !== null) {
            if (number.length === 5) {
                return true;
            }
        }
        return false;
    }

    postUser = async () => {
        let user = {
            'is_superuser': false,
            'username': this.props.details.email,
            'first_name': this.props.details.firstName,
            'last_name': this.props.details.lastName,
            'email': this.props.details.email,
            'is_staff': false,
            'is_active': false,
            "password": uuid()
        }

        const res = await fetch('http://127.0.0.1:8000/api/users/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        const jsonRes = await res.json()
        this.setState({ userId: jsonRes.id }, async () => this.postCustomer())
    }

    postCustomer = async () => {
        const { userId } = this.state;
        let customer = {
            "phone_number": this.props.details.phoneNumber,
            "user": userId,
            "added_at": moment()
        }

        const res = await fetch('http://127.0.0.1:8000/api/customers/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(customer)
        })
        const jsonRes = await res.json()
        this.setState({ customerId: jsonRes.id }, async () => {
            this.postAddress();
            this.postOrder();
        })
    }

    postAddress = async () => {
        const { customerId } = this.state;
        let address = {
            "customer": customerId,
            "street1": this.props.details.street1,
            "street2": this.props.details.street2,
            "city": this.props.details.city,
            "state": this.props.details.state,
            "zip": this.props.details.zip,
            "country": this.props.details.country
        }

        await fetch('http://127.0.0.1:8000/api/addresses/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(address)
        })
    }

    postOrder = async () => {
        const { customerId } = this.state;
        let order = {
            "customer": customerId,
            "cut": this.props.cut.cut.name,
            "primary_color": this.props.colors.primaryColorCode,
            "secondary_color": this.props.colors.secondaryColorCode,
            "toe_primary_text": this.props.text.toeText,
            "brim_primary_text": this.props.text.brimText,
            "logo": this.props.logo.inputLogo,
            "added_at": moment()
        }
        const res = await fetch('http://127.0.0.1:8000/api/orders/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order)
        })
        const resJson = await res.json()
        this.setState({ orderId: resJson.id }, () => this.postSizes());
    }

    postSizes = async () => {
        const { orderId } = this.state;
        let sizes = {
            "order": orderId,
            "youth": this.props.details.youth,
            "small": this.props.details.small,
            "medium": this.props.details.medium,
            "large": this.props.details.large,
        }
        await fetch('http://127.0.0.1:8000/api/sizes/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sizes)
        })
    }

    submitOrder = async () => {
        this.setState({
            isFirstName: this.props.details.firstName !== null,
            isLastName: this.props.details.lastName !== null,
            isPhoneNumber: this.props.details.phoneNumber !== null,
            isEmail: this.props.details.email !== null,
            isEmailValid: this.validateEmail(this.props.details.email),
            isPhoneNumberValid: this.validatePhoneNumber(this.props.details.phoneNumber),
            isStreet: this.props.details.street1 !== null,
            isState: this.props.details.state !== null,
            isCity: this.props.details.city !== null,
            isZip: this.props.details.zip !== null,
            isZipValid: this.validateZip(this.props.details.zip),
            isCountry: this.props.details.country
        }, async () => {
            const { isFirstName, isLastName, isPhoneNumber, isEmail, isEmailValid, isPhoneNumberValid, isStreet, isState,
                isCity, isZip, isZipValid, isCountry } = this.state;
            if (isFirstName && isLastName && isPhoneNumber && isEmail && isEmailValid && isPhoneNumberValid) {
                this.postUser()
            }

            if (isFirstName && isLastName && isPhoneNumber && isEmail && isEmailValid && isPhoneNumberValid && isZipValid && isState && isStreet) {
                this.handleSubmit()
            }

        })
    }

    render() {
        const { isFirstName, isLastName, isPhoneNumber, isEmail, isPhoneNumberValid, isEmailValid, isStreet, isState,
            isCity, isZip, isZipValid, isCountry } = this.state;
        return (
            <React.Fragment>
                <Container container direction="column">
                    <h1>Confirm Your Order</h1>
                    <PersonalInfo isFirstName={isFirstName}
                        isLastName={isLastName} isPhoneNumber={isPhoneNumber} isEmail={isEmail}
                        isPhoneNumberValid={isPhoneNumberValid} isEmailValid={isEmailValid} />
                    <Address isStreet={isStreet} isState={isState} isCity={isCity} isZip={isZip}
                        isZipValid={isZipValid} isCountry={isCountry} />
                    <Sizes />
                    <Shift>
                        <StyledButton variant="contained" size="large" color="primary" onClick={() => this.submitOrder()}>Submit</StyledButton>

                    </Shift>
                </Container>
            </React.Fragment >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors,
        text: state.text,
        logo: state.logo,
        cut: state.cut,
        details: state.details
    };
}

const mapDispatchToProps = () => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(details)
