import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import  { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Item from '../../components/Item/Item';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../store/actions/productsActions';
import * as cartActions from '../../store/actions/cartActions';
import * as wishlistActions from '../../store/actions/wishlistActions';
import Modal from '../../components/Modal/Modal';
import { ModalContext } from '../../hoc/Layout/modalContext';

class Products extends Component {

  state={
    itemname:null
  }
  componentDidMount(){
    if(!this.props.products || this.props.fetchProductsFail){
      this.props.onFetchProducts();
    }
  }
  static contextType= ModalContext
  render() {
    const  { classes } = this.props;
    let products=<Spinner/>;
    let failureMessage=<Typography variant='body1' align='center' style={{width:'100%'}}> An error occurred please check your network</Typography>;
    if(this.props.products && this.props.fetchProductsSuccess) {
      products=(this.props.products.map((data,index)=>{
        return (
          <div key={index} className={classes.item}>
            <ModalContext.Consumer>
              {
                ({setItemName,toggleModal})=>(
                  <Item
                    toggleModal={toggleModal}
                    setItemName={setItemName}
                    wishlistIds={this.props.wishlist_ids}
                    cartIds={this.props.item_ids}
                    data={data}
                    add={this.props.addItemToCartHandler}
                    remove={this.props.removeItemFromCartHandler}
                    addToWishlist={this.props.addItemtoWishlistHandler}
                    removeFromWishlist={this.props.removeItemFromWishlistHandler}
                    />
                )
              }

              </ModalContext.Consumer>
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
        <ModalContext.Consumer>
          {
            ({itemName,toggleModal,showModal})=>(
              <Modal show={showModal} itemname={itemName} handleClose={toggleModal}  />
            )
          }
        </ModalContext.Consumer>
      </Grid>
    )
  }
}

const mapStateToProps= state =>({
  products:state.products.products,
  fetchProductsSuccess:state.products.fetchProductsSuccess,
  fetchProductsFail:state.products.fetchProductsFail,
  item_ids:state.cart.item_ids,
  wishlist_ids:state.wishlist.item_ids
})

const mapDispatchToProps = dispatch =>({
  onFetchProducts: ()=>dispatch(actions.fetchProductsAsync()),
  addItemToCartHandler: (obj)=> dispatch(cartActions.addToCart(obj)),
  removeItemFromCartHandler: (obj) =>dispatch(cartActions.removeFromCart(obj)),
  addItemtoWishlistHandler:(obj) =>dispatch(wishlistActions.addToWishlist(obj)),
  removeItemFromWishlistHandler: (obj) => dispatch(wishlistActions.removeFromWishlist(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Products));
