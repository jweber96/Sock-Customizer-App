import React from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from './Personal'
import Address from './Address'

const details = () => {

    return (
        <React.Fragment>
            <Grid container direction="column" justify="center" alignItems="center">
                <h1>Details</h1>
            </Grid>
            <Grid container style={{paddingLeft: 50}}>
                <PersonalInfo/>
                <Address/>
            </Grid>
        </React.Fragment>
    );
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
