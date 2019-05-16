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
class App extends Component{

  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={asyncHome}/>
          <Route path="/products" {...this.props} exact render={()=> <AsyncProducts />}/>
          <Route path="/cart" exact component={asyncCart}/>
          <Route path="/wishlist" exact component={asyncWishlist}/>
        </Switch>
      </Layout>
    )
  }
}
export default App;
