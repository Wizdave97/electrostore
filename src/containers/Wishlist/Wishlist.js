import React, { Component } from 'react';
import styles from './styles';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  { withStyles } from '@material-ui/core/styles';
import { Grid, Typography, Divider, Button} from '@material-ui/core';
import WishlistItem from '../../components/WishlistItem/WishlistItem';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../store/actions/wishlistActions';

class Wishlist extends Component {

  componentDidMount(){
    //this.props.onFetchWishlist();
  }
  render() {
    const  { classes } = this.props;
    let wishlist=<Spinner/>;
    let failureMessage=<Typography variant='body1' align='center' style={{width:'100%'}}> An error occurred please check your network</Typography>;
    if(this.props.wishlist.length===0 && this.props.fetchWishlistSuccess){
      wishlist=(
        <React.Fragment>
          <Typography variant='body1' align='center' style={{width:'100%'}}> Your wishlist is empty continue shopping to add items to your wishlist</Typography>
          <Button variant='contained' size='medium' color='secondary' component={Link} to='/products'>Continue Shopping</Button>
        </React.Fragment>
      )
    }
    if(this.props.wishlist.length!==0 || this.props.fetchWishlistSuccess) {
      wishlist=(this.props.wishlist.map((data,index)=>{
        return (
          <div key={index} className={classes.item}>
              <WishlistItem data={data} delete={this.props.removeFromWishlist}/>
          </div>
        )
      }))
    }
    if(this.props.wishlist.length===0 && this.props.fetchWishlistFail) {
      wishlist=failureMessage;
      }
    return (

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
      >
        <div className={classes.wishlist}>
          <div className={classes.sectionTitle}>
            <Divider className={classes.divider}/>
            <Typography align="center" variant="h4" color="secondary" gutterBottom>Your Wishlist</Typography>
            <Divider className={classes.divider}/>
          </div>
          <div className={classes.allWishlistItems}>
            {wishlist}
          </div>
        </div>
      </Grid>
    )
  }
}

const mapStateToProps= state =>({
  wishlist:state.wishlist.wishlist,
  fetchWishlistSuccess:state.wishlist.fetchWishlistSuccess,
  fetchWishlistFail:state.wishlist.fetchWishlistFail
})

const mapDispatchToProps = dispatch =>({
  removeFromWishlist:(obj)=> dispatch(actions.removeFromWishlist(obj))
})

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Wishlist));
