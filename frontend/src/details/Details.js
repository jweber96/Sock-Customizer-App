import React, {Component} from "react"
import { connect } from "react-redux";
import { Typography, Grid, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PersonalInfo from './Personal'
import Address from './Address'
import 'typeface-roboto';

const Container = withStyles({
    root: {
        marginTop: 50
    }
})(Grid);

const Shift = withStyles({
    root: {
        marginTop: 10
    }
})(Grid);

class details extends Component {
    render() {
        return (
            <React.Fragment>
                <Container container direction="column">
                    <PersonalInfo/>
                    <Address/>
                    <Shift>
                        <Button variant="contained" size="large" color="primary">Submit</Button>
                    </Shift>
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = () => {
    return {
        // Nothing to map yet...
    };
}

const mapDispatchToProps = () => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(details)
