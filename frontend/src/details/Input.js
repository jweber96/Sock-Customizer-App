
import React from "react"
import 'typeface-roboto';
import { TextField } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        paddingRight: 10
      },
    },
  }));

  const TextInput = styled(TextField)`
  font-family: 'Ubuntu', sans-serif;
`;


function Input(props) {
    const classes = useStyles();
    let error = props.error != undefined ? props.error : true
    return (
      <form className={classes.root} autoComplete="off">
        <TextInput error={!error} fullWidth id="outlined-basic" helperText={props.helperText} value={props.value} variant="outlined" label={props.label} onChange={props.onChange} required={props.required}/>
      </form>
    );
}

export default Input