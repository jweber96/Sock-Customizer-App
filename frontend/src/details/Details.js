import React, {Component} from "react"
import { connect } from "react-redux";
import { Grid, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonalInfo from './Personal'
import Address from './Address'
import Sizes from './Sizes'
import 'typeface-roboto';

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
            isPersonal: false,
            isAddress: false
        }
    }
    submitOrder = () => {

        // let customer = {
        //     "address": {
        //         "street1": props.details.street1,
        //         "street2": props.details.street2,
        //         "city": props.details.city,
        //         "state": props.details.state,
        //         "zip": props.details.zip,
        //         "country": props.details.country
        //     },
        //     "first_name": props.details.firstName,
        //     "last_name": props.details.lastName,
        //     "email": props.details.email,
        //     "phone_number": props.details.phoneNumber,
        //     "user": 2
        // }

        // let order = {
        //     "customer": "1",
        //     "sizes": {
        //         "youth": null,
        //         "small": null,
        //         "medium": null,
        //         "large": null,
        //         "extra_large": null
        //     },
        //     "design": null,
        //     "primary_color": "",
        //     "secondary_color": "",
        //     "toe_primary_text": "",
        //     "toe_secondary_text": "",
        //     "brim_primary_text": "",
        //     "brim_secondary_text": "",
        //     "logo": null,
        //     "added_at": null
        // }a
        // const request = fetch('http://127.0.0.1:8000/api/customers', {
        //     method: 'POST',
        //     headers: {"content-type": "application/json"},
        //     body: JSON.stringify(customer)
        // })
    }

    render() {
        return (
            <React.Fragment>
                <Container container direction="column">
                    <h1>Confirm Your Order</h1>
                    <PersonalInfo personalErrors={()=>this.setState({isPersonal: true})}/>
                    <Address addressErrors={()=>this.setState({isAddress: true})}/>
                    <Sizes/>
                    <Shift>
                        <StyledButton variant="contained" size="large" color="primary" onClick={()=>this.submitOrder()}>Submit</StyledButton>
                    </Shift>
                </Container>
            </React.Fragment>
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
