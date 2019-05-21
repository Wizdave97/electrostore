import React, { Component, Fragment} from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Spinner from '../../components/Spinner/Spinner';
import styles from './styles';
import * as actions from '../../store/actions/productsActions';
import { removeFromCart , addToCart} from '../../store/actions/cartActions';

class Details extends Component {

  state={
    item:null,
    inCart:false
  }
  componentDidMount(){
    const id= this.props.match.params.id
    this.fixDetailsOnMount(id)
    this.setCartifiedState(id)
  }
  async fixDetailsOnMount(id){
    await this.props.fetchProducts();
    if (this.props.products){
      for ( let obj of this.props.products) {
        if(obj.id == id){
          this.setState({
            item:obj
          })
          break;
        }
      }
    }
  }
  setCartifiedState = (id) =>{
    if(this.props.item_ids.includes(id)) {
      this.setState(state=>({
        inCart:!state.inCart
      }))
    }
  }
  render() {
    const { classes } = this.props
    const { item, inCart } = this.state
    let details=<Spinner/>;
    if(item){
      details=(<Fragment>
        <Grid
        item
        xs={12}
        sm={6}>
          <div className={classes.imgContainer}>
            <img src={item.img} alt={item.title}/>
          </div>
        </Grid>
        <Grid item
        xs={12}
        sm={6}>
            <div className={classes.details}>
              <div className={classes.info}>
                <Typography className={classes.text} variant='h5' align='center' color='secondary'>Info</Typography>
                <Typography className={classes.text} variant='h6'>Name : {item.title}</Typography>
                <Typography className={classes.text} variant='h6'>Company : {item.company}</Typography>
                <Typography className={classes.text} variant='h6'>Price :$ {item.price}</Typography>
              </div>
              <div className={classes.description}>
                <Typography className={classes.text} variant="h5" align="center" color='secondary'>Description</Typography>
                <Typography className={classes.text} variant="body1" align="left" >{item.info}</Typography>
                <div className={classes.actions}>
                  <Button size='medium' variant='outlined' color='secondary' component={Link} to='/products'>Continue Shopping</Button>
                  <Button size='medium' variant='outlined' color='secondary'
                        onClick={()=>{inCart?this.props.removeFromCart(item):this.props.addToCart(item); this.setCartifiedState(item.id)}}>
                        {inCart?'Remove from cart':'Add to cart'}
                  </Button>
                </div>
              </div>
            </div>
        </Grid>
      </Fragment>
      )
    }
    return details
  }
}
const mapStateToProps = state =>({
  item_ids:state.cart.item_ids,
  just_in:state.products.just_in,
  editors_choice:state.products.editors_choice,
  products:state.products.products
})
const mapDispatchToProps = dispatch =>({
  addToCart: (obj)=> dispatch(addToCart(obj)),
  removeFromCart: (obj)=> dispatch(removeFromCart(obj)),
  fetchProducts: ()=> dispatch(actions.fetchProductsAsync())
})
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Details));
