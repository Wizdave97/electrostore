import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from './utils/asyncComponent';

const asyncHome=asyncComponent(()=>{
  return import('./containers/Home/Home')
})
const AsyncProducts=asyncComponent(()=>{
  return import('./containers/Products/Products')
})
const asyncCart=asyncComponent(()=>{
  return import('./containers/Cart/Cart')
})
const asyncWishlist=asyncComponent(()=>{
  return import('./containers/Wishlist/Wishlist')
})
const asyncDetails=asyncComponent(()=>{
  return import('./containers/Details/Details')
})
const asyncCheckout=asyncComponent(()=>{
  return import('./containers/Checkout/Checkout')
})
class App extends Component{

  componentDidMount() {
    this.generatePayPalScript();
  }
  generatePayPalScript =() => {
    let script= document.createElement('script');
    script.src="https://www.paypal.com/sdk/js?client-id=AQ5GkgxbiPg49xCU3MNQ2Um2voRrapf3sRM-ICTznG5j1u4t3pcb1c1snqSQyvBoDsMUbxj33ktEMkdK&currency=USD"
    document.body.appendChild(script);
  }
  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={asyncHome}/>
          <Route path="/products" {...this.props} exact render={()=> <AsyncProducts />}/>
          <Route path="/cart" exact component={asyncCart}/>
          <Route path="/wishlist" exact component={asyncWishlist}/>
          <Route path="/details/:id" exact component={asyncDetails}/>
          <Route path="/checkout" exact component={asyncCheckout}/>
        </Switch>
      </Layout>
    )
  }
}
export default App;
