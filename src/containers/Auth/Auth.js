import React, { Component, Fragment} from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Typography, TextField, Button, Paper} from '@material-ui/core';
import formSerialize from 'form-serialize';
import Logo from '../../logo.svg'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import {hasError, showError, removeError } from '../../utils/Utility';
import styles from './styles'
import * as actions from '../../store/actions/authActions';


const emailPattern=`^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`
 class Auth extends Component {
   state={
     isSignUp:false,
     authData:null
   }
   changeSignUpState= () =>{
     this.setState(state=>({
       isSignUp:!state.isSignUp
     }))

   }
   componentDidMount() {
     this.props.updateCurrentView('/auth')

   }
   componentDidUpdate(prevState,nextState) {
     if(!nextState.isSignUp) {
       document.addEventListener('blur',this.validityChecker,true)

     }
     if(nextState.isSignUp) {
        document.removeEventListener('blur',this.validityChecker,true)
        let inputs =Array.from(document.querySelectorAll('input'))
        for(let input of inputs){
          removeError(input)
        }
      }
   }
   componentWillUnmount() {
     this.props.updateCurrentView('')
     document.removeEventListener('blur',this.validityChecker,true)
   }
   validityChecker= (e) =>{
     let error= hasError(e.target);
     if(error) showError(e.target,error)
     else removeError(e.target)
   }
   submitAuthForm = (event) =>{
     event.preventDefault();
     let form=document.querySelector('form');
     let formData=formSerialize(form,{hash:true})
     let authData={...formData,returnSecureToken:true}
     if(!form.checkValidity()){
       let inputs =Array.from(document.querySelectorAll('input'))
       for(let input of inputs){
         let errorStatus=hasError(input)
         if(errorStatus) showError(input,errorStatus)
         if(!errorStatus) removeError(input)
       }
       for(let input of inputs ){
         if(hasError(input)) {
           input.focus()
           break;
         }
       }
     }
     if(form.checkValidity()) {
       this.setState({authData:authData})
       this.props.onSubmitAuth(authData,this.state.isSignUp)
     }
   }
   render(){
     const { classes } = this.props
     const { isSignUp } = this.state
     let form=(<Fragment>
         <Paper className={classes.paper}>
           <form className={classes.form} noValidate={true} onSubmit={(event)=>this.submitAuthForm(event)}>
             <div className={classes.logoContainer}><div><img src={Logo} alt="mob store"/></div></div>
             <div className={classes.heading}>
               <Typography variant="h5" color="secondary" align="center" gutterBottom>
                 {isSignUp?'We are so excited to have you in our community':'Welcome Back! Log into your Account' }
               </Typography>
             </div>
             <div className={classes.authDetails}>
               <TextField
                 className={classes.textField}
                 required
                 id='email'
                 label="Email"
                 type="email"
                 name="email"
                 variant="standard"
                 autoComplete="email"
                 fullWidth
                 margin="normal"
                 inputProps={{
                   pattern:emailPattern
                 }}
                 />
               <TextField
                 className={classes.textField}
                 required
                 id='password'
                 label="Password"
                 type="password"
                 inputProps={{
                   minLength:8
                 }}
                 name="password"
                 variant="standard"
                 autoComplete="password"
                 fullWidth
                 margin="normal"
                 />
               <Button type='submit' color='secondary' className={classes.button} variant="contained" size="medium">{isSignUp?'Sign Up':'Login'}</Button>
             </div>
             <div className={classes.authState}>
                <Typography variant="body1" color="error" align="center" style={{width:'100%'}} gutterBottom>{isSignUp?'Have an account?':"Don't have an account?"}</Typography>
                <Button onClick={()=> this.changeSignUpState()} color='secondary' className={classes.button} variant="contained" size="medium">{isSignUp?'Login':'Sign Up'}</Button>
             </div>
           </form>
         </Paper>
     </Fragment>
     )
     let authForm = form
     if (this.props.loading){
       authForm=<Spinner/>
     }
     if (this.props.error) {
       let errorMessage='An Error Ocurred please retry';
       if(typeof this.props.error==='string'){
         switch (this.props.error) {
           case 'EMAIL_NOT_FOUND':
            errorMessage='That email does not exist on our servers'
            break;
           case 'INVALID_EMAIL':
            errorMessage='The email provided is invalid'
            break;
           case 'EMAIL_EXISTS':
            errorMessage='That email exists on our servers already'
            break;
           default : errorMessage='An Error Ocurred please retry'
         }
       }
       authForm=(
         <Fragment>
           <Typography
             variant="body1"
             color="error"
             align="center"
             style={{width:'100%'}}
             gutterBottom>{errorMessage}</Typography>
           {form}
         </Fragment>
       )
     }
     return (
       <React.Fragment>
         {this.props.success?<Redirect to='/' />:null}
       <Grid item
         className={classes.container}
         xs={11}
         sm={8}
         md={6}>
          <div className={classes.auth}>
              {authForm}
           </div>
       </Grid>
     </React.Fragment>
     )
   }
 }
 const mapStateToProps = state=>({
   loading:state.auth.loading,
   error:state.auth.error,
   success:state.auth.success
 })
 const mapDispatchToProps= dispatch=>({
   onSubmitAuth: (authData,isSignUp) => dispatch(actions.authAsync(authData,isSignUp))
 })
 export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Auth));
