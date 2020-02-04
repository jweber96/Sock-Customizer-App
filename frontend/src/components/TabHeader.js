import React from "react"
import { connect } from "react-redux";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { clickTab } from "../actions/TabActions";
import TabBody from "./TabBody";
import Design from "./Design"
import Colors from "./Colors"
import Text from "./Text"
import Logo from "./Logo"
import Details from "./Details"
import 'typeface-roboto';


const tabHeader = (props) => {
    const handleChange = (event, value) => {
        props.clickTab(value);
    }

    return (
        <React.Fragment>
            <AppBar position="static" color="default">
                <Tabs
                    value={props.value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Design" />
                    <Tab label="Colors"  />
                    <Tab label="Text" />
                    <Tab label="Logo" />
                    <Tab label="Details" />
                </Tabs>
            </AppBar>
            <TabBody index="0">
                <Design />
            </TabBody>
            <TabBody index="1">
                <Colors />
            </TabBody>
            <TabBody index="2">
                <Text />
            </TabBody>
            <TabBody index="3">
                <Logo />
            </TabBody>
            <TabBody index="4">
                <Details />
            </TabBody>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        value: state.tabState.value
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickTab: (logo) => dispatch(clickTab(logo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(tabHeader)
