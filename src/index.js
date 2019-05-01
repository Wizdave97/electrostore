import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const theme= createMuiTheme({
    palette:{
        type:'light',
        primary:{
            main:'#9c27b0'
        },
        secondary:{
            main:'#651fff'
        },
        error:red,
        contrastThreshold: 3,
        tonalOffset: 0.2
        
    }
})
ReactDOM.render(
    <BrowserRouter>
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
