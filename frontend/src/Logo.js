import React, {Component} from 'react'
import 'typeface-roboto';
import { Typography, Grid} from '@material-ui/core';

export default class Logo extends Component {
    render() {
        return (
            <div style={{flexGrow: 1, paddingTop: 15}}>
                <Grid container justify="center" alignItems="center">
                    <Typography variant="h5">
                        Logo
                    </Typography>
                </Grid>
            </div>
        );
    }
}
