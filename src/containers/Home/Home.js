import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './styles' ;
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider } from '@material-ui/core';
import Featured from '../../components/Featured/Featured';
import Benefits from '../../components/Benefits/Benefits';
import Brands from '../../components/Brands/Brands';
import EditorsChoice from '../../components/EditorsChoice/EditorsChoice';
import * as actions from '../../store/actions/productsActions';
import * as cartActions from '../../store/actions/cartActions';
import * as wishlistActions from '../../store/actions/wishlistActions';
import Spinner from '../../components/Spinner/Spinner';

class Home extends Component{

  componentDidMount(){
    if(!this.props.just_in || this.props.fetchJustInFail){
      this.props.onFetchJustIn();
    }
    if(!this.props.editors_choice || this.props.fetchEditorsChoiceFail){
      this.props.onFetchEditorsChoice();
    }
  }

  render(){
    const { classes }= this.props;
    let editorsChoice=<Spinner/>;
    let justIn=<Spinner/>
    let failureMessage=<Typography variant='body1' align='center'> An error occurred please check your network</Typography>
    if(this.props.editors_choice && this.props.fetchEditorsChoiceSuccess) {
      editorsChoice=(<EditorsChoice
                          wishlistIds={this.props.wishlist_ids}
                          cartIds={this.props.item_ids}
                          editors_choice={this.props.editors_choice}
                          add={this.props.addItemToCartHandler}
                          remove={this.props.removeItemFromCartHandler}
                          addToWishlist={this.props.addItemtoWishlistHandler}
                          removeFromWishlist={this.props.removeItemFromWishlistHandler}
                          />

                      )
    }
    else if(!this.props.editors_choice && this.props.fetchEditorsChoiceFail) {
      editorsChoice=failureMessage
    }
    if(this.props.just_in && this.props.fetchJustInSuccess) {
      justIn=(<EditorsChoice
                  wishlistIds={this.props.wishlist_ids}
                  cartIds={this.props.item_ids}
                  editors_choice={this.props.just_in}
                  add={this.props.addItemToCartHandler}
                  remove={this.props.removeItemFromCartHandler}
                  addToWishlist={this.props.addItemtoWishlistHandler}
                  removeFromWishlist={this.props.removeItemFromWishlistHandler}
                  />)
    }
    else if(!this.props.just_in && this.props.fetchJustInFail) {
      justIn=failureMessage
    }
    return(
      <Fragment>
        <Grid item xs={12} sm={12} md={12}>
          <Featured/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Benefits</Typography>
            <Divider className={classes.divider}/>
          </div>
          <Benefits/>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Editor's Choice</Typography>
            <Divider className={classes.divider}/>
          </div>
          {editorsChoice}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Just In</Typography>
            <Divider className={classes.divider}/>
          </div>
          {justIn}
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="default" gutterBottom>Brands</Typography>
            <Divider className={classes.divider}/>
          </div>
          <Brands/>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state =>({
  editors_choice:state.products.editors_choice,
  just_in:state.products.just_in,
  item_ids:state.cart.item_ids,
  wishlist_ids:state.wishlist.item_ids,
  fetchEditorsChoiceSuccess:state.products.fetchEditorsChoiceSuccess,
  fetchEditorsChoiceFail:state.products.fetchEditorsChoiceFail,
  fetchJustInSuccess:state.products.fetchJustInSuccess,
  fetchJustInFail:state.products.fetchJustInFail,
})

const mapDispatchToProps = dispatch => ({
  onFetchEditorsChoice:()=> dispatch(actions.fetchEditorsChoiceAsync()),
  onFetchJustIn:()=> dispatch(actions.fetchJustInAsync()),
  addItemToCartHandler: (obj)=> dispatch(cartActions.addToCart(obj)),
  removeItemFromCartHandler: (obj) =>dispatch(cartActions.removeFromCart(obj)),
  addItemtoWishlistHandler:(obj) =>dispatch(wishlistActions.addToWishlist(obj)),
  removeItemFromWishlistHandler: (obj) => dispatch(wishlistActions.removeFromWishlist(obj))
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Home));
