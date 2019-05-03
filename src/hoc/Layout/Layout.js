import React , { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar';
import styles from './styles';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import BackDrop from '../../components/Backdrop/Backdrop';

class Layout extends Component {
    state={
        showSideDrawer:false
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
                <Navbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
                <main className={classes.main} style={{padding:8}}>
                    <Grid
                        container
                        spacing={16}
                        justify='center'>
                        {this.props.children}
                        </Grid>
                </main>
                </div>
                <SideDrawer show={this.state.showSideDrawer}/>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Layout);
