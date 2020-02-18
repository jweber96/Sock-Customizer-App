import React from "react"
import { connect } from "react-redux";
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from './Personal'
import Address from './Address'
import 'typeface-roboto';

const details = () => {

    return (
        <React.Fragment>
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
