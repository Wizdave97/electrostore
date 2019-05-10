import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './styles' ;
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Featured from '../../components/Featured/Featured';
import Benefits from '../../components/Benefits/Benefits';
import Brands from '../../components/Brands/Brands';
import EditorsChoice from '../../components/EditorsChoice/EditorsChoice';
import * as actions from '../../store/actions/productsActions';
import Spinner from '../../components/Spinner/Spinner';

class Home extends Component{

  componentDidMount(){
    this.props.onFetchEditorsChoice();
    this.props.onFetchJustIn();
  }

  render(){
    const { classes }= this.props;
    let editorsChoice=<Spinner/>;
    let justIn=<Spinner/>
    let failureMessage=<Typography variant='body1' align='center'> An error occurred please check your network</Typography>
    if(this.props.editors_choice && this.props.fetchEditorsChoiceSuccess) {
      editorsChoice=<EditorsChoice editors_choice={this.props.editors_choice}/>
    }
    else if(!this.props.editors_choice && this.props.fetchEditorsChoiceFail) {
      editorsChoice=failureMessage
    }
    if(this.props.just_in && this.props.fetchJustInSuccess) {
      justIn=<EditorsChoice editors_choice={this.props.just_in}/>
    }
    else if(!this.props.just_in && this.props.fetchJustInFail) {
      justIn=failureMessage
    }
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
          {editorsChoice}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Just In</Typography>
            <Divider className={classes.divider}/>
          </div>
          {justIn}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Brands</Typography>
            <Divider className={classes.divider}/>  
          </div>
          <Brands/>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
  editors_choice:state.products.editors_choice,
  just_in:state.products.just_in,
  fetchEditorsChoiceSuccess:state.products.fetchEditorsChoiceSuccess,
  fetchEditorsChoiceFail:state.products.fetchEditorsChoiceFail,
  fetchJustInSuccess:state.products.fetchJustInSuccess,
  fetchJustInFail:state.products.fetchJustInFail,
})

const mapDispatchToProps = dispatch => ({
  onFetchEditorsChoice:()=> dispatch(actions.fetchEditorsChoiceAsync()),
  onFetchJustIn:()=> dispatch(actions.fetchJustInAsync())
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Home));
