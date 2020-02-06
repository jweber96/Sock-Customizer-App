import React from "react"
import { connect } from "react-redux";
import Cut from "../cut/Cut"
import TabHeader from "../tabs/TabsHeader";
import "typeface-roboto";
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const body = () => {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route path="/" exact component={Cut}>
                    </Route>
                    <Route path="/customizer" exact component={TabHeader}>
                    </Route>
                </Switch>
            </Router>
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
