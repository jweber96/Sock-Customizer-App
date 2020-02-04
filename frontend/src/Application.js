import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { CssBaseline, Grid } from "@material-ui/core";

const application = () => {
  return (
    <Provider store={Store()}>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Header />
        <Body />
        <Footer />
      </Grid>
    </Provider>
  );
}

export default application;