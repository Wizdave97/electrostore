import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import { Switch, Route,Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AsyncComponent from './utils/asyncComponent';
import Home from './containers/Home/Home';
import { autoSignIn } from './store/actions/authActions';

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
const AsyncProfile=AsyncComponent(()=>{
  return import('./containers/Profile/Profile')
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
    let routes=(
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/products"   component={AsyncProducts }/>
        <Route path="/cart"  component={AsyncCart}/>
        <Route path="/wishlist"  component={AsyncWishlist}/>
        <Route path="/details/:id"  component={AsyncDetails}/>
        <Route path="/auth"  render={()=> <AsyncAuth updateCurrentView={this.updateCurrentView}/>}/>
        <Redirect to='/'/>
    </Switch>
    )
    if( this.props.isAuthenticated) {
      routes=(
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products"   component={AsyncProducts }/>
          <Route path="/cart"  component={AsyncCart}/>
          <Route path="/wishlist"  component={AsyncWishlist}/>
          <Route path="/details/:id"  component={AsyncDetails}/>
          <Route path="/auth"  render={()=> <AsyncAuth updateCurrentView={this.updateCurrentView}/>}/>
          <Route path="/checkout"  component={AsyncCheckout}/>
          <Route path="/profile"  component={AsyncProfile}/>
          <Redirect to='/'/>
        </Switch>)
    }
    return(
      <Layout currentView={this.state.currentView}>
        {routes}
      </Layout>
    )
  }
}

const mapStateToProps= state=>({
  isAuthenticated:state.auth.idToken!==null
})
const mapDispatchToProps= dispatch =>({
  onAutoSignIn: ()=> dispatch(autoSignIn())
})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
