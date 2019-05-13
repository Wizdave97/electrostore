import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import  { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Item from '../../components/Item/Item';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../store/actions/productsActions';
import * as cartActions from '../../store/actions/cartActions';

class Products extends Component {

  componentDidMount(){
    this.props.onFetchProducts();
  }
  render() {
    const  { classes } = this.props;
    let products=<Spinner/>;
    let failureMessage=<Typography variant='body1' align='center' style={{width:'100%'}}> An error occurred please check your network</Typography>;
    if(this.props.products && this.props.fetchProductsSuccess) {
      products=(this.props.products.map((data,index)=>{
        return (
          <div key={index} className={classes.item}>
              <Item data={data} add={this.props.addItemToCartHandler}  remove={this.props.removeItemFromCartHandler}/>
          </div>
        )
      }))
    }
    if(!this.props.products && this.props.fetchProductsFail) {
      products=failureMessage;
      }
    return (

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
      >
        <div className={classes.products}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="secondary" gutterBottom>Our Products</Typography>
            <Divider className={classes.divider}/>
          </div>
          <div className={classes.allProducts}>
            {products}
          </div>
        </div>
      </Grid>
    )
  }
}

const mapStateToProps= state =>({
  products:state.products.products,
  fetchProductsSuccess:state.products.fetchProductsSuccess,
  fetchProductsFail:state.products.fetchProductsFail
})

const mapDispatchToProps = dispatch =>({
  onFetchProducts: ()=>dispatch(actions.fetchProductsAsync()),
  addItemToCartHandler: (obj)=> dispatch(cartActions.addToCart(obj)),
  removeItemFromCartHandler: (obj) =>dispatch(cartActions.removeFromCart(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Products));
