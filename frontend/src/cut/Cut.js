import React from "react"
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import "typeface-roboto";
import Button from '@material-ui/core/Button';
import { NavLink } from "react-router-dom";


import QUARTER from "../images/quartersock.png";
import CREW from "../images/crewsock.png";
import KNEEHIGH from "../images/kneehighsock.png";


const cut = () => {
    return (
        <React.Fragment>
            <h1>Step 1: Select Cut Length</h1>

            <Grid container direction="row" justify="space-around" alignItems="center">
                <Grid item sm container>
                    <Grid item container direction="column" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item>
                            <h2>QUARTER SOCK - $5.45</h2>
                        </Grid>

                        <Grid item>
                            <img src={QUARTER} alt="A quarter sized sock" />
                        </Grid>

                        <Grid item>
                            <Button variant="contained" size="large" color="primary" disabled>
                                UNAVAILABLE
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm container>
                    <Grid item container direction="column" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item>
                            <h2>CREW SOCK $5.95</h2>
                        </Grid>

                        <Grid item>
                            <img src={CREW} alt="A crew sized sock" />
                        </Grid>

                        <Grid item>
                            <NavLink to='/customizer'>
                                <Button variant="contained" size="large" color="primary">
                                    SELECT
                                </Button>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm container>
                    <Grid item container direction="column" justify="space-around" alignItems="center" spacing={2}>
                        <Grid item>
                            <h2>KNEE HIGH SOCK - $6.45</h2>
                        </Grid>

                        <Grid item>
                            <img src={KNEEHIGH} alt="A knee high sized sock" />
                        </Grid>

                        <Grid item>
                            <Button variant="contained" size="large" color="primary" disabled>
                                UNAVAILABLE
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {/* TODO: Implement the detail tab... */}
            </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(cut)
