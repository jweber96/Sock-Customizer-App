import React from "react"
import { connect } from "react-redux";
import { Typography, Grid, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import 'typeface-roboto';

const details = () => {
    return (
        <React.Fragment>
            <Grid container style={{paddingLeft: 50}}>
                <Typography variant="subtitle1">Personal Information</Typography>
                <Grid container direction="row">
                    <Grid item spacing={2}>
                        <Input label="First Name" required={true}/>
                    </Grid>
                    <Grid spacing={2}>
                        <Input label="Last Name" required={true}/>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item spacing={2}>
                        <Input label="Email" required={true}/>
                    </Grid>
                    <Grid item spacing={2}>
                        <Input label="Phone Number" required={true}/>
                    </Grid>
                </Grid>
                <Typography variant="subtitle1">Address</Typography>
                <Grid item xs={12}>
                    <Input label="Street" required={true}/>
                </Grid>
                <Grid item xs={12}>
                    <Input label="Apt/Suite/Other" required={false}/>
                </Grid>
                <Grid container direction="row">
                    <Grid item spacing={2}>
                        <Input label="City" required={true}/>
                    </Grid>
                    <Grid item spacing={2}>
                        <Input label="Zip" required={true}/>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid item spacing={2}>
                        <Input label="State" required={true}/>
                    </Grid>
                    <Grid item spacing={2}>
                        <Input label="Country" required={true}/>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

function Input(props) {
    const classes = useStyles();
    return (
      <form className={classes.root} autoComplete="off">
        <TextField id="outlined-basic" variant="outlined" label={props.label} onChange={props.onChange} required={props.required}/>
      </form>
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
