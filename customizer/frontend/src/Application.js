import React from "react";
import { Provider } from "react-redux";
import { CssBaseline, Grid } from "@material-ui/core";
import Store from "./Store";
import Header from "./layout/Header";
import Body from "./layout/Body";
import Footer from "./layout/Footer";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme'
import { HashRouter as Router } from 'react-router-dom'

const application = () => {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={Store()}>
      <link href="https://fonts.googleapis.com/css2?family=Saira&family=Ubuntu:wght@300&display=swap" rel="stylesheet"/>
      <CssBaseline />
      <Grid container direction="column" justify="center" alignItems="center">
        <Router>
          <Header />
          <Body />
          <Footer />
        </Router>
      </Grid>
    </Provider>
    </ThemeProvider>
  );
}

export default application;