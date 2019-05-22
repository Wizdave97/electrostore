import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AsyncComponent from './utils/asyncComponent';
import { autoSignIn } from './store/actions/authActions';

const AsyncHome=AsyncComponent(()=>{
  return import('./containers/Home/Home')
})
const AsyncProducts=AsyncComponent(()=>{
  return import('./containers/Products/Products')
})
const AsyncCart=AsyncComponent(()=>{
  return import('./containers/Cart/Cart')
})
const AsyncWishlist=AsyncComponent(()=>{
  return import('./containers/Wishlist/Wishlist')
})
const AsyncDetails=AsyncComponent(()=>{
  return import('./containers/Details/Details')
})
const AsyncCheckout=AsyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
})
const AsyncAuth=AsyncComponent(()=>{
  return import('./containers/Auth/Auth')
})
class App extends Component{
  state={
    currentView:'/'
  }
  updateCurrentView = (str) =>{
    this.setState({
      currentView:str
    })
  }
  componentDidMount() {
    this.generatePayPalScript();
    this.props.onAutoSignIn();

  }
  generatePayPalScript =() => {
    let script= document.createElement('script');
    script.src="https://www.paypal.com/sdk/js?client-id=AQ5GkgxbiPg49xCU3MNQ2Um2voRrapf3sRM-ICTznG5j1u4t3pcb1c1snqSQyvBoDsMUbxj33ktEMkdK&currency=USD"
    document.body.appendChild(script);
  }
  render(){
    return(
      <Layout currentView={this.state.currentView}>
        <Switch>
          <Route path="/" exact component={AsyncHome}/>
          <Route path="/products"  exact component={AsyncProducts }/>
          <Route path="/cart" exact component={AsyncCart}/>
          <Route path="/wishlist" exact component={AsyncWishlist}/>
          <Route path="/details/:id" exact component={AsyncDetails}/>
          <Route path="/checkout" exact component={AsyncCheckout}/>
          <Route path="/auth" exact render={()=> <AsyncAuth updateCurrentView={this.updateCurrentView}/>}/>
        </Switch>
      </Layout>
    )
  }
}

const mapStateToProps= state=>({

})
const mapDispatchToProps= dispatch =>({
  onAutoSignIn: ()=> dispatch(autoSignIn())
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
