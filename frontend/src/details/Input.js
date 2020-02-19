
import React from "react"
import { connect } from "react-redux";
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
    return (
      <form className={classes.root} autoComplete="off">
        <TextField fullWidth id="outlined-basic" variant="outlined" label={props.label} onChange={props.onChange} required={props.required}/>
      </form>
    );
}

export default Input