import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Select, InputLabel, FormControl} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: '96%',
  }
}));

function DropDown(props) {
    const classes = useStyles();

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    return (<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel}>
          {props.title}
        </InputLabel>
        <Select native
          defaultValue={props.options[0]}
          renderValue={props.value}
          onChange={e => props.onChange(e)}
          labelWidth={labelWidth}           
          inputProps={{
            name: props.value,
            id: 'outlined-age-native-simple'
          }}>
          {props.options.map(o => 
          <option value={o}>{o}</option>
          )}
        </Select>
      </FormControl>);
}

export default DropDown