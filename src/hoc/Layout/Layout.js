import React , { Component, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Navbar from '../../components/Navbar/Navbar';
import styles from './styles';

class Layout extends Component {

    render(){
        const { classes } = this.props
        return(
            <Fragment>
                <Navbar/>
                <main className={classes.main} style={{padding:8}}>
                    <Grid 
                        container 
                        spacing={16}
                        justify='center'>
                        {this.props.children}
                        </Grid>
                </main>
            </Fragment>
        )
    }
}

export default withStyles(styles)(Layout);