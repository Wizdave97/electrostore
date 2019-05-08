import React, { Component, Fragment } from 'react';
import styles from './styles' ;
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import Featured from '../../components/Featured/Featured';
import Benefits from '../../components/Benefits/Benefits';

class Home extends Component{

  render(){
    return(
      <Fragment>
        <Grid item xs={12} sm={12} md={12}>
          <Featured/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography align="center" variant="h4" color="default" gutterBottom>Benefits</Typography>
          <Benefits/>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography align="center" variant="h4" color="default" gutterBottom>Editor's Choice</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography align="center" variant="h4" color="default" gutterBottom>Just In</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Typography align="center" variant="h4" color="default" gutterBottom>Brands</Typography>
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Home);
