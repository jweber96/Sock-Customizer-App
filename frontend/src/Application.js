import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, Grid } from "@material-ui/core";
import Store from "./Store";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";

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