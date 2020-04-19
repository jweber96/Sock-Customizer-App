import React, { Component } from "react"
import { connect } from "react-redux";
import { Grid, Button, Typography, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonalInfo from './Personal'
import Address from './Address'
import Sizes from './Sizes'
import 'typeface-roboto';
import moment from 'moment';

const { uuid } = require('uuidv4');

const Container = withStyles({
    root: {
        marginLeft: '18%'
    }
})(Grid);

const Shift = withStyles({
    root: {
        marginTop: 20,
    }
})(Grid);

const Header = withStyles({
    root: {
        fontWeight: 'bold',
    }
})(Typography);

const StyledButton = withStyles({
    root: {
        width: '20%',
        marginRight: 15
    },
    label: {
        color: 'white',
    },
})(Button);

const StyledDivider = withStyles({
    root: {
        width: '75%',
        marginBottom: 10,
        marginTop: 10
    },
})(Divider);

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
            isSizes: true,
            userId: -1,
            customerId: -1,
            orderId: -1,
            page: 0
        }
        this.handleChange = this.handleChange.bind(this); //Used for email functionality
        this.handleSubmit = this.handleSubmit.bind(this); //Used for email functionality
    }

    //Email functionality START. See Developer's Instruction Manual for more details
    handleChange(event) {
        this.setState({ feedback: event.target.value })
    }

    handleSubmit(event) {

        this.sendForm(
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
                phone_number: this.props.details.phoneNumber,
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
                order_id: this.state.orderId,
                customer_id: this.state.customerId
            })
    }

    sendForm(variables) {
        //Sends email to company email
        window.emailjs.send(
            'default_service', "template_sD1dx3I6",
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
        //Sends email to customer
        window.emailjs.send(
            'default_service', "template_sD1dx3I6_clone",
            variables
        ).then(res => {
            console.log('Email successfully sent!')
        })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }
    //Email functionality END

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

    getTotalNoOfSizes() {
        let youth = 0;
        let small = 0;
        let medium = 0;
        let large = 0;
        if (this.props.details.youth === "") {
            youth = 0
        } else {
            youth = parseInt(this.props.details.youth) 
        }
        if (this.props.details.small === "") {
            small = 0
        } else {
            small = parseInt(this.props.details.small)
        }
        if (this.props.details.medium === "") {
            medium = 0
        } else {
            medium = parseInt(this.props.details.medium)
        }
        if (this.props.details.large === "") {
            large = 0
        } else {
            large = parseInt(this.props.details.large)
        }
        let total = youth + small + medium + large;
        return total
    }

    validateSizes() {
        let total = this.getTotalNoOfSizes()
        return total >= 5;
    }

    postUser = async () => {
        const res0 = await fetch('/api/existing-user/?email=' + this.props.details.email, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
        const userRes = await res0.json()
        if (userRes.id === -1) {
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

            const res = await fetch('/api/users/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            })
            const jsonRes = await res.json()
            this.setState({ userId: jsonRes.id }, async () => this.postCustomer())
        } else {
            this.setState({userId: userRes.id}, async() => this.postCustomer())
        }
    }

    postCustomer = async () => {
        const { userId } = this.state;
        let customer = {
            "phone_number": this.props.details.phoneNumber,
            "user": userId,
            "added_at": moment()
        }

        const res = await fetch('/api/customers/', {
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

        await fetch('/api/addresses/', {
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
        const res = await fetch('/api/orders/', {
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
        const res = await fetch('/api/sizes/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(sizes)
        })
        if (res.status === 200 || res.status === 201) {
            this.setState({page: 2})
        }
    }

    submitOrder = async (type) => {
        this.setState({
            isFirstName: this.props.details.firstName !== null && this.props.details.firstName !== "",
            isLastName: this.props.details.lastName !== null && this.props.details.lastName !== "",
            isPhoneNumber: this.props.details.phoneNumber !== null &&  this.props.details.phoneNumber !== "",
            isEmail: this.props.details.email !== null && this.props.details.email !== "",
            isEmailValid: this.validateEmail(this.props.details.email),
            isPhoneNumberValid: this.validatePhoneNumber(this.props.details.phoneNumber),
            isStreet: this.props.details.street1 !== null && this.props.details.street1 !== "",
            isState: this.props.details.state !== null && this.props.details.state !== "",
            isCity: this.props.details.city !== null && this.props.details.city !== "",
            isZip: this.props.details.zip !== null && this.props.details.zip !== "",
            isZipValid: this.validateZip(this.props.details.zip),
            isCountry: this.props.details.country !== null && this.props.details.country !== "",
            isSizes: this.validateSizes()
        }, async () => {
            const { isFirstName, isLastName, isPhoneNumber, isEmail, isEmailValid, isPhoneNumberValid, isStreet, isState,
                isCity, isZip, isZipValid, isCountry, isSizes, page } = this.state;
            if (isFirstName && isLastName && isPhoneNumber && isEmail && isEmailValid && isPhoneNumberValid && 
                isCity && isZipValid && isZip && isCountry && isState && isStreet && isSizes && type === "review") {
                this.setState({page: 1})
            }
            if (isFirstName && isLastName && isPhoneNumber && isEmail && isEmailValid && isPhoneNumberValid && 
                isCity && isZipValid && isZip && isCountry && isState && isStreet && isSizes && type === "confirm") {
                this.postUser()
                this.handleSubmit()
            }
        })
    }

    getOrderTotal() {
        let total = this.getTotalNoOfSizes()
        let total_cost = 0.00;
        switch (this.props.cut.cut.name) {
            case 'Quarter Sock':
                total_cost = total * 5.45;
                break;
            case 'Crew Sock':
                total_cost = total * 5.95;
                break;
            case 'Knee High Sock':
                total_cost = total * 6.45;
                break;
            default:
                break;
        }
        return total_cost.toFixed(2);
    }

    render() {
        const { page, isFirstName, isLastName, isPhoneNumber, isEmail, isPhoneNumberValid, isEmailValid, isStreet, isState,
            isCity, isZip, isZipValid, isCountry, isSizes } = this.state;
        switch (page) {
            case 0:
                return (
                    <React.Fragment>
                        <Container container direction="column">
                            <Typography variant="h5">Confirm Your Order</Typography>
                            <PersonalInfo isFirstName={isFirstName}
                                isLastName={isLastName} isPhoneNumber={isPhoneNumber} isEmail={isEmail}
                                isPhoneNumberValid={isPhoneNumberValid} isEmailValid={isEmailValid} />
                            <Address isStreet={isStreet} isState={isState} isCity={isCity} isZip={isZip}
                                isZipValid={isZipValid} isCountry={isCountry} />
                            <Sizes isSizes={isSizes}/>
                            <Grid container justify="space-between" direction="row" xs={6} style={{marginTop: 15}}>
                                <Grid item xs={5}>
                                    <Header variant="subtitle1">Order Total</Header>
                                </Grid>
                                <Grid item xs={5}>
                                    <Typography variant="subtitle1">${this.getOrderTotal()}</Typography>
                                </Grid>
                            </Grid>
                            <Shift>
                                <StyledButton variant="contained" size="large" color="primary" onClick={() => this.submitOrder("review")}>Confirm</StyledButton>
                            </Shift>
                        </Container>
                    </React.Fragment >
                );
            case 1: 
                return (
                    <React.Fragment>
                        <Grid container direction="column" justify="center" alignContent="center">
                            <Typography variant="h5">Confirm your Order</Typography>
                            <Typography variant="h6">Your Information</Typography>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">First Name</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.firstName}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item  xs={6}>
                                    <Header variant="subtitle1">Last Name</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.lastName}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Email</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.email}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Phone Number</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.phoneNumber}</Typography>
                                </Grid>
                            </Grid>
                            <StyledDivider/>
                            <Typography variant="h6">Shipping Address</Typography>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Street</Header>
                                </Grid>
                                <Grid ite xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.street1}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Apt/Suit/Other</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.street2 !== null ? this.props.details.street2 : "None" }</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">City</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.city}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Zip Code</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.zip}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">State</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.state}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Country</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.country}</Typography>
                                </Grid>
                            </Grid>
                            <StyledDivider/>
                            <Typography variant="h6">Order Information</Typography>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Youth</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.youth !== "" ? this.props.details.youth : "0"}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Small</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.small !== "" ? this.props.details.small : "0"}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Medium</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.medium !== "" ? this.props.details.medium : "0"}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row" xs={7}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Large</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">{this.props.details.large !== "" ? this.props.details.large : "0"}</Typography>
                                </Grid>
                            </Grid>
                            <Grid container justify="space-between" direction="row"xs={7} style={{marginTop: 15}}>
                                <Grid item xs={6}>
                                    <Header variant="subtitle1">Order Total</Header>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="subtitle1">${this.getOrderTotal()}</Typography>
                                </Grid>
                            </Grid>
                            <Shift>
                                <StyledButton variant="contained" size="large" color="primary" onClick={() => this.setState({page: 0})}>Edit</StyledButton>
                                <StyledButton variant="contained" size="large" color="primary" onClick={() => this.submitOrder("confirm")}>Submit</StyledButton>
                            </Shift>
                        </Grid>
                    </React.Fragment >
                )
            case 2:
                return (
                    <React.Fragment>
                        <Grid container direction="column" justify="center" alignContent="center">
                            <Typography variant="h5">Thanks {this.props.details.firstName}, we got your order!</Typography>
                            <Typography variant="subtitle1">Check your email for more information.</Typography>
                        </Grid>
                    </React.Fragment >
                );
            default:
                return (
                    <div></div>
                )
        }
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
