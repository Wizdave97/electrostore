import React , { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar';
import styles from './styles';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BackDrop from '../../components/Backdrop/Backdrop';
import Notification from '../../components/Notification/Notification';
import  { ModalContext } from './modalContext';
import * as actions from '../../store/actions/authActions';


class Layout extends Component {



    deleteNotification= () =>{
      this.setState({showNotification:false})
    }
    toggleModalHandler= () =>{
      this.setState(state=>({
        showModal:!state.showModal
      }))
    }
    setItemName = (name) =>{
      this.setState({
        itemName:name
      })
    }
    state={
        showSideDrawer:false,
        showModal:false,
        itemName:null,
        toggleModal:this.toggleModalHandler,
        setItemName:this.setItemName,
        showNotification:true
    }
    toggleSideDrawerHandler = ()=>{
        this.setState(state=>({
            showSideDrawer:!state.showSideDrawer
        }))
    }
    componentDidMount(){
      setTimeout(()=>{
        this.setState({
          showNotification:false
        })
      },3000)
    }

    render(){
        const { classes } = this.props
        return(
            <Fragment>

                <div className={[classes.root,this.state.showSideDrawer?classes.show:''].join(' ')} >
                {this.state.showSideDrawer?<BackDrop showSideDrawer={this.state.showSideDrawer} toggleSideDrawer={this.toggleSideDrawerHandler}/>:''}
                <Navbar
                  logOut={this.props.onLogOut}
                  wishes={this.props.wishes}
                  quantity={this.props.quantity}
                  sumTotal={this.props.sumTotal}
                  toggleSideDrawer={this.toggleSideDrawerHandler}
                  currentView={this.props.currentView}
                  isAuthenticated={this.props.isAuthenticated}
                  />
                <main className={classes.main} style={{padding:8}}>
                    <Grid
                        container
                        spacing={16}
                        justify='center'>
                        <ModalContext.Provider value={this.state}>
                          {this.props.children}
                        </ModalContext.Provider>
                        </Grid>
                </main>
                </div>
                <SideDrawer
                  logOut={this.props.onLogOut}
                  isAuthenticated={this.props.isAuthenticated}
                  username={this.props.userName}
                  photoUrl={this.props.photoUrl}
                  currentView={this.props.currentView}
                  wishes={this.props.wishes}
                  toggleSideDrawer={this.toggleSideDrawerHandler}
                  quantity={this.props.quantity}
                  sumTotal={this.props.sumTotal}
                  show={this.state.showSideDrawer}/>
                {this.props.isAuthenticated && !this.props.userName && this.state.showNotification ?<Notification hideNotification={this.deleteNotification} />:null}
            </Fragment>
        )
    }
}
const mapStateToProps = state =>({
  quantity:state.cart.quantity,
  sumTotal:state.cart.sumTotal,
  wishes:state.wishlist.quantity,
  isAuthenticated: state.auth.idToken!==null,
  userName:state.auth.userName,
  photoUrl:state.auth.photoUrl
})
const mapDispatchToProps= dispatch =>({
  onLogOut:() => dispatch(actions.authLogout())
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Layout));
