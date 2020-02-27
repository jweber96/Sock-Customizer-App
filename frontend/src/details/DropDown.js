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
    const [state, setState] = React.useState({
      age: '',
      name: 'hai',
    });

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    React.useEffect(() => {
      setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const handleChange = name => event => {
      setState({
        ...state,
        [name]: event.target.value,
      });
    };

    return (<FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel}>
          {props.title}
        </InputLabel>
        <Select
          native
          value={props.value}
          onChange={props.handleChange}
          labelWidth={labelWidth}
        >
          <option value={props.option1}>{props.option1}</option>
        </Select>
      </FormControl>);
}

export default DropDown