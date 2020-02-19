
import React from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default Input