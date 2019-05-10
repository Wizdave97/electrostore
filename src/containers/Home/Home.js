import React, { Component, Fragment } from 'react';
import styles from './styles' ;
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Featured from '../../components/Featured/Featured';
import Benefits from '../../components/Benefits/Benefits';
import EditorsChoice from '../../components/EditorsChoice/EditorsChoice';

class Home extends Component{

  render(){
    const { classes }= this.props
    return(
      <Fragment>
        <Grid item xs={12} sm={12} md={12}>
          <Featured/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Benefits</Typography>
            <Divider className={classes.divider}/>
          </div>
          <Benefits/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Editor's Choice</Typography>
            <Divider className={classes.divider}/>
          </div>
          <EditorsChoice/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Just In</Typography>
            <Divider className={classes.divider}/>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Brands</Typography>
            <Divider className={classes.divider}/>
          </div>
        </Grid>
      </Fragment>
    )
  }
}

export default withStyles(styles)(Home);
