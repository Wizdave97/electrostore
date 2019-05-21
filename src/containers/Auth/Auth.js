import React, { Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Typography, TextField, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as actions from '../../store/actions/authActions';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

const styles= theme =>({
  auth:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    padding:'5px',
    alignSelf:'center',
    boxSizing:'border-box'
  },
  button:{
      marginRight:theme.spacing.unit,
      marginLeft:theme.spacing.unit,
      marginBottom:theme.spacing.unit
        },

})

 class Auth extends Component {
   render(){
     const { classes } = this.props
     let form = (
       <Fragment>
         <div className={classes.auth}>
           <Button className={classes.button} variant='outlined' size='medium' color='secondary' fullWidth>Google Signin</Button>
           <Button className={classes.button} variant='outlined' size='medium' color='secondary' fullWidth>Google Signup</Button>
         </div>
       </Fragment>
     )
     if (this.props.loading){
       form=<Spinner/>
     }
     return (
       <React.Fragment>
         {this.props.isAuthenticated?<Redirect to='/home'/>:''}
       <Grid item
         xs={12}
         sm={6}
         md={6}>

           <Typography  variant='h3'
             color='secondary'
             align="center"
             variant='h5'
             className={classes.text}
             gutterBottom>Hello</Typography>
            {form}
       </Grid>
     </React.Fragment>
     )
   }
 }
 const mapStateToProps = state=>({
   loading:state.auth.loading,
   error:state.auth.error,
   isAuthenticated:state.auth.idToken!==null
 })
 const mapDispatchToProps= dispatch=>({
   onSubmitForm:(isSignUp)=> dispatch(actions.auth(isSignUp))
 })
 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Auth));
