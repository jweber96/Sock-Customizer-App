import React from "react"
import { connect } from "react-redux";
import { Box } from "@material-ui/core";
import 'typeface-roboto';


const tabBody = (props) => {
    return (
        <React.Fragment>
            {
                // Breaks tabs for some reason if you use === instead of ==
                // eslint-disable-next-line eqeqeq
                props.index == props.value && <Box p="3">{props.children}</Box>
            }
        </React.Fragment>
    );
}

const mapStateToProps = (state, props) => {
    return {
        index: props.index,
        children: props.children,
        value: state.tabState.value
    };
}

const mapDispatchToProps = () => {
    return {
        // Nothing to map yet...
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(tabBody)
