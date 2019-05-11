import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import Products from './containers/Products/Products';


class App extends Component{

  render(){
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products}/>
        </Switch>
      </Layout>
    )
  }
}
export default App;
