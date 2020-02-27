import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid } from '@material-ui/core';
import Input from './Input'
import DropDown from './DropDown'
import { youth, small, medium, large } from './DetailsAction'


class address extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    handleYouthText = (event) => {
        this.props.youth(event.target.value);
    }
    
    handleSmallText = (event) => {
        this.props.small(event.target.value);
    }
    
    handleMediumText = (event) => {
        this.props.medium(event.target.value);
    }
    
    handleLargeText = (event) => {
        this.props.large(event.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="subtitle1">Sizes</Typography>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <Input label="Youth" required={false} value={this.props.youth || "0"} onChange={this.handleYouthText}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input label="Small" required={false} value={this.props.small || "0"} onChange={this.handleSmallText}/>
                    </Grid>            
                    <Grid item xs={2}>
                        <Input label="Medium" required={false} value={this.props.medium || "0"} onChange={this.handleMediumText}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input label="Large" required={false} value={this.props.large || "0"} onChange={this.handleLargeText}/>
                    </Grid>
                </Grid>  
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        youth: state.text.youth,
        small: state.text.small,
        medium: state.text.medium,
        large: state.text.large
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        youth: (text) => dispatch(youth(text)),
        small: (text) => dispatch(small(text)),
        medium: (text) => dispatch(medium(text)), 
        large: (text) => dispatch(large(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(address)
