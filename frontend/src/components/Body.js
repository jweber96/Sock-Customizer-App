import React from "react"
import { connect } from "react-redux";
import TabHeader from "./TabHeader";
import 'typeface-roboto';


const body = () => {
    return (
        <React.Fragment>
            <TabHeader />
        </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(body)
