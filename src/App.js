import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Products from './containers/Products/Products';
import Cart from './containers/Cart/Cart';
import Wishlist from './containers/Wishlist/Wishlist'


class App extends Component{

  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products}/>
          <Route path="/cart" exact component={Cart}/>
          <Route path="/wishlist" exact component={Wishlist}/>
        </Switch>
      </Layout>
    )
  }
}
export default App;
