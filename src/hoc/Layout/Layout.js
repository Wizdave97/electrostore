import React , { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar';
import styles from './styles';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BackDrop from '../../components/Backdrop/Backdrop';
import  { ModalContext } from './modalContext';

class Layout extends Component {

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
        setItemName:this.setItemName
    }
    toggleSideDrawerHandler = ()=>{
        this.setState(state=>({
            showSideDrawer:!state.showSideDrawer
        }))
    }

    render(){
        const { classes } = this.props

        return(
            <Fragment>

                <div className={[classes.root,this.state.showSideDrawer?classes.show:''].join(' ')} >
                {this.state.showSideDrawer?<BackDrop showSideDrawer={this.state.showSideDrawer} toggleSideDrawer={this.toggleSideDrawerHandler}/>:''}
                <Navbar wishes={this.props.wishes} quantity={this.props.quantity} sumTotal={this.props.sumTotal} toggleSideDrawer={this.toggleSideDrawerHandler}/>
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
                  wishes={this.props.wishes}
                  toggleSideDrawer={this.toggleSideDrawerHandler}
                  quantity={this.props.quantity}
                  sumTotal={this.props.sumTotal}
                  show={this.state.showSideDrawer}/>
            </Fragment>
        )
    }
}
const mapStateToProps = state =>({
  quantity:state.cart.quantity,
  sumTotal:state.cart.sumTotal,
  wishes:state.wishlist.quantity
})
export default connect(mapStateToProps)(withStyles(styles)(Layout));
