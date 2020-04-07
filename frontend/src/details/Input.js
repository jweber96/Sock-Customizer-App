
import React from "react"
import 'typeface-roboto';
import { TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        paddingRight: 10
      },
    },
  }));


function Input(props) {
    const classes = useStyles();
    let error = props.error != undefined ? props.error : true
    return (
      <form className={classes.root} autoComplete="off">
        <TextField error={!error} fullWidth id="outlined-basic" helperText={props.helperText} variant="outlined" label={props.label} onChange={props.onChange} required={props.required}/>
      </form>
    );
}

export default Input