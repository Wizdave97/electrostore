import React , { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Logo from '../../logo.svg';
import Spinner from '../../components/Spinner/Spinner';
import { connect } from 'react-redux';
import { Grid, Paper, Typography, Button, TextField, } from '@material-ui/core';
import styles from './styles';
import { readFileAsUrl, imageResize } from '../../utils/imageResize';
import * as actions from '../../store/actions/profileActions';


class Profile extends Component {

  state={
    isUpdate:false,
    name:null,
    tel:null
  }
  componentDidMount() {
    this.setState({
      isUpdate:this.props.userName!==null,
      tel:this.props.tel,
      name:this.props.userName
    })
  }
  handleInputChange= (e,field) =>{
    switch(field) {
      case 'name':
        this.setState({name:e.target.value})
        break;
      case 'tel':
        this.setState({tel:e.target.value})
        break;
      default: return null
    }
  }
  submitProfileForm= (event) => {
    event.preventDefault();
    let name=document.getElementById('name').value;
    let tel=document.getElementById('tel').value;
    let photo=document.getElementById('photo').files[0];
    if(!this.state.isUpdate) {
      readFileAsUrl(photo).then(imageUrl=>{
        imageResize(imageUrl,photo.type).then(image=>{
          this.props.onSubmitProfile(name,tel,image,photo.type,this.state.isUpdate)
        })
      })
    }
    if(this.state.isUpdate) {
      if(photo){
        readFileAsUrl(photo).then(imageUrl=>{
          imageResize(imageUrl,photo.type).then(image=>{
            this.props.onSubmitProfile(name,tel,image,photo.type,this.state.isUpdate)
          })
        })
      }
      else {
        this.props.submitProfileWithoutPicture(name,tel)
      }
    }
  }
  componentDidUpdate (prevState,nextState) {
  }
  render(){
    const { classes } = this.props
    const { isUpdate,name,tel } = this.state
    let form=(<Fragment>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate={true} onSubmit={(event)=>this.submitProfileForm(event)}>
            <div className={classes.logoContainer}><div><img src={Logo} alt="mob store"/></div></div>
            <div className={classes.heading}>
              <Typography variant="h5" color="secondary" align="center" gutterBottom>
                {isUpdate?'Update your profile':'Create your profile'}
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
                value={isUpdate && name ?name:' '}
                onChange={(event)=> this.handleInputChange(event, 'name')}
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
                value={isUpdate && tel?tel:' '}
                onChange={(event)=> this.handleInputChange(event, 'tel')}
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
          color="secondary"
          align="center"
          style={{width:'100%'}}
          gutterBottom>
          Uploading Image {this.props.imageUploadProgress} % done
          </Typography>)
    }
    if (this.props.error || this.props.uploadingImageFail) {
      let errorMessage='An Error Ocurred please retry';
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
      }

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
    tel:state.auth.tel,
    loading:state.profile.loading,
    success:state.profile.success,
    error:state.profile.success,
    uploadingImage:state.profile.uploadingImage,
    uploadingImageFail:state.profile.uploadingImageFail,
    uploadingImageSuccess:state.profile.uploadingImageSuccess,
    imageUploadProgress:state.profile.imageUploadProgress
  })
  const mapDispatchToProps = dispatch =>({
    onSubmitProfile: (name,tel,img,type,isUpdate)=>dispatch(actions.uploadProfileInfoAsync(name,tel,img,type,isUpdate)),
    submitProfileWithoutPicture: (name,tel)=>dispatch(actions.uploadProfileWithoutPicture(name,tel))
  })
  export default  connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Profile));
