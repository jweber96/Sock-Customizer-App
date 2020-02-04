import React from "react"
import { connect } from "react-redux";
import { AppBar, Tab, Tabs } from "@material-ui/core";
import { clickTab } from "./TabsActions";
import TabBody from "./TabsBody";
import Design from "../design/Design"
import Colors from "../colors/Colors"
import Text from "../text/Text"
import Logo from "../logo/Logo"
import Details from "../details/Details"
import "typeface-roboto";


const tabsHeader = (props) => {
    const handleChange = (event, value) => {
        props.clickTab(value);
    }

    return (
        <React.Fragment>
            <AppBar position="sticky" color="default">
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
        value: state.tabsState.value
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        clickTab: (logo) => dispatch(clickTab(logo))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(tabsHeader)
