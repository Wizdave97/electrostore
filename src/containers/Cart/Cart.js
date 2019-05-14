import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Button} from '@material-ui/core';
import CartItem from '../../components/CartItem/CartItem';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../store/actions/cartActions';

class Cart extends Component {

  componentDidMount(){
    //this.props.onFetchCart();
  }
  render() {
    const  { classes } = this.props;
    let cart=<Spinner/>;
    let failureMessage=<Typography variant='body1' align='center' style={{width:'100%'}}> An error occurred please check your network</Typography>;
    if(this.props.cart.length===0 && this.props.fetchCartSuccess){
      cart=(
        <React.Fragment>
          <Typography variant='body1' align='center' style={{width:'100%'}}> Your cart is empty continue shopping to add items to your cart</Typography>
          <Button variant='contained' size='medium' color='secondary' component={Link} to='/products'>Continue Shopping</Button>
        </React.Fragment>
      )
    }
    if(this.props.cart.length!==0 || this.props.fetchCartSuccess) {
      cart=(this.props.cart.map((data,index)=>{
        return (
          <div key={index} className={classes.item}>
              <CartItem data={data} delete={this.props.removeFromCart}/>
          </div>
        )
      }))
    }
    if(this.props.cart.length===0 && this.props.fetchCartFail) {
      cart=failureMessage;
      }
    return (

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
      >
        <div className={classes.cart}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="secondary" gutterBottom>Your Cart</Typography>
            <Divider className={classes.divider}/>
          </div>
          <div className={classes.allCartItems}>
            {cart}
            { this.props.cart.length!==0?<Typography className={classes.checkout} align='center' variant='body1' color='secondary'>Sum Total: ${this.props.sumTotal}</Typography>:null }
            { this.props.cart.length!==0?<Button className={classes.checkout} size='medium' variant='contained' color='secondary' component={Link} to='/checkout'>Proceed to Checkout</Button>:null }
          </div>
        </div>
      </Grid>
    )
  }
}

const mapStateToProps= state =>({
  cart:state.cart.cart,
  fetchCartSuccess:state.cart.fetchCartSuccess,
  fetchCartFail:state.cart.fetchCartFail,
  sumTotal:state.cart.sumTotal
})

const mapDispatchToProps = dispatch =>({
  removeFromCart:(obj)=> dispatch(actions.removeFromCart(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Cart));
