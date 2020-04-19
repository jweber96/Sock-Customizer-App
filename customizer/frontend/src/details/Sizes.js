import React, {Component} from "react"
import { connect } from "react-redux";
import 'typeface-roboto';
import { Typography, Grid, FormHelperText } from '@material-ui/core';
import Input from './Input'
import DropDown from './DropDown'
import { inputYouth, inputSmall, inputMedium, inputLarge } from './DetailsAction'

class address extends Component {
    constructor(props) {
        super(props);
    }

    handleYouthText = (event) => {
        this.props.inputYouth(event.target.value);
    }
    
    handleSmallText = (event) => {
        this.props.inputSmall(event.target.value);
    }
    
    handleMediumText = (event) => {
        this.props.inputMedium(event.target.value);
    }
    
    handleLargeText = (event) => {
        this.props.inputLarge(event.target.value);
    }

    render() {
        return (
            <React.Fragment>
                <Typography variant="h6">Order Information</Typography>
                <Grid container direction="row">
                    <Grid item xs={2}>
                        <Input label="Youth" required={false} value={this.props.youth} onChange={this.handleYouthText}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input label="Small" required={false} value={this.props.small} onChange={this.handleSmallText}/>
                    </Grid>            
                    <Grid item xs={2}>
                        <Input label="Medium" required={false} value={this.props.medium} onChange={this.handleMediumText}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Input label="Large" required={false} value={this.props.large} onChange={this.handleLargeText}/>
                    </Grid>
                </Grid>  
                <Grid item>
                    {!this.props.isSizes && <FormHelperText error>You must order at least 5 socks</FormHelperText>}
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        youth: state.details.youth,
        small: state.details.small,
        medium: state.details.medium,
        large: state.details.large
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputYouth: (text) => dispatch(inputYouth(text)),
        inputSmall: (text) => dispatch(inputSmall(text)),
        inputMedium: (text) => dispatch(inputMedium(text)), 
        inputLarge: (text) => dispatch(inputLarge(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(address)
