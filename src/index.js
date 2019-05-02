import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { red,white } from '@material-ui/core/colors';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const theme= createMuiTheme({
    overrides:{
        MuiTypography:{
            'body1':{
                fontFamily:'"PT Sans", "Roboto", sans-serif'
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
