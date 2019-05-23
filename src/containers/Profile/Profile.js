import React , { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { Grid, Paper, Typography, Button, TextField, } from '@material-ui/core';
import styles from './styles';


class Profile extends Component {

  state={
    isUpdate:false
  }
  componentDidMount() {
    this.setState({
      isUpdate:this.props.userName!==null
    })
  }
  render(){
    const { classes } = this.props
    const { isUpdate } = this.state
    let form=(<Fragment>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate={true} onSubmit={(event)=>this.submitProfileForm(event)}>
            <div className={classes.logoContainer}><div><img src={Logo} alt="mob store"/></div></div>
            <div className={classes.heading}>
              <Typography variant="h5" color="secondary" align="center" gutterBottom>
                {isSignUp?'Update your profile':'Create your profile'}
              </Typography>
            </div>
            <div className={classes.profileDetails}>
              <TextField
                className={classes.textField}
                required
                id='name'
                label="Full Name"
                type="text"
                name="name"
                variant="standard"
                autoComplete="name"
                fullWidth
                margin="normal"
                />
              <TextField
                className={classes.textField}
                required
                id='tel'
                label="Telephone Number"
                type="tel"
                name="phone"
                variant="standard"
                autoComplete="tel"
                fullWidth
                margin="normal"
                />
                <TextField
                  className={classes.textField}
                  required={this.state.isUpdate?true:false}
                  id='photo'
                  label="Profile Picture"
                  type="file"
                  name="photo"
                  variant="standard"
                  fullWidth
                  margin="normal"
                  />
              <Button type='submit' color='secondary' className={classes.button} variant="contained" size="medium">{isUpdate?'Update Profile':'Create Profile'}</Button>
            </div>
          </form>
        </Paper>
    </Fragment>
    )
    let profileForm = form
    if (this.props.loading){
      profileForm=<Spinner/>
    }
    if (this.props.uploadingImage) {
      profileForm=(
        <Typography
          variant="body1"
          color="error"
          align="center"
          style={{width:'100%'}}
          gutterBottom>
          Uploading Image {this.props.ImageUploadProgress} % done
          </Typography>)
    }
    if (this.props.error || this.props.uploadingImageFail) {
      let errorMessage='An Error Ocurred please retry';
      }
      profileForm=(
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
      return (
        <React.Fragment>
          {this.props.success?<Redirect to='/' />:null}
        <Grid item
          className={classes.container}
          xs={11}
          sm={8}
          md={6}>
           <div className={classes.profile}>
               {profileForm}
            </div>
        </Grid>
      </React.Fragment>
      )
    }

  }
  const mapStateToProps= state =>({
    userName:state.auth.userName,
    loading:state.profile.loading,
    success:state.profile.success,
    error:state.profile.success,
    uploadingImage:state.profile.uploadingImage,
    uploadingImageFail:state.profile.uploadingImageFail,
    uploadingImageSuccess:state.profile.uploadingImageSuccess,
    imageUploadProgress:state.profile.imageUploadProgress
  })
  const mapDispatchToProps = dispatch =>({

  })
  export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Profile));
