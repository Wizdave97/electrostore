import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { createStore, applyMiddleware, combineReducers , compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { red,orange } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { auth, cart, products } from './store/reducers';

const rootReducer=combineReducers({
  auth:auth,
  cart:cart,
  products:products
})
const composeEnhancers = process.env.NODE_ENV ==='development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
const theme= createMuiTheme({
    overrides:{
        MuiTypography:{
            'body1':{
                fontFamily:'"PT Sans", "Roboto", sans-serif'
            } ,
            'h4':{
              fontFamily:'"Sofia", "Roboto", sans-serif'
            }
        }
    },
    typography:{useNextVariants:true},
    palette:{
        type:'light',
        primary:{
            main:'#fff'
        },
        secondary:{
            main:'#0d47a1'
        },
        action:orange,
        error:red,
        contrastThreshold: 3,
        tonalOffset: 0.2

    }
})
const app=(
  <Provider store={store}>
  <BrowserRouter>
  <MuiThemeProvider theme={theme}>
      <App />
  </MuiThemeProvider>
  </BrowserRouter>
</Provider>

)
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
