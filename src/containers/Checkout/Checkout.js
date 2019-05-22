import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import formSerialize from 'form-serialize';
import styles from './styles';
import { connect } from 'react-redux';
import { TextField, Grid, Button , Typography } from '@material-ui/core';

const emailPattern=`^([a-zA-Z0-9_\\-\\.]+)@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.)|(([a-zA-Z0-9\\-]+\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\]?)$`

class Checkout extends Component {



  submitCheckoutForm = (event) =>{
    event.preventDefault();
    let form=document.getElementById('checkout-form');
    let formData=formSerialize(form,{hash:true})
    if(form.checkValidity()) this.checkOut()
  }
  checkOut= () =>{
    if(window.paypal.Buttons) {
      window.paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: String(this.props.sumTotal)
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // Capture the funds from the transaction
        return actions.order.capture().then(function(details) {
          // Show a success message to your buyer
          window.alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render('#paypal-checkout');
    }
  }
  render() {

    const { classes } = this.props
    return (
      <Grid item
            xs={12}
            sm={6}
            >

            <Typography variant='h4' align='center' color='secondary' gutterBottom>Checkout</Typography>
            <form id='checkout-form' className={classes.form} validate="true" onSubmit={(event)=> this.submitCheckoutForm(event)}>
                <TextField
                  required
                  label="Name"
                  type='text'
                  name="name"
                  autoComplete="name"
                  variant="outlined"
                  margin="normal"
                  className={classes.textField}
                  fullWidth
                />
                <TextField
                  required
                  id="outlined-email-input"
                  label="Email"
                  className={classes.textField}
                  type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  inputProps={{
                    pattern:emailPattern
                  }}
                  />
                <TextField
                  required
                  label="Mobile Number"
                  className={classes.textField}
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  />
                <TextField
                  required
                  type='text'
                  label="Shipping Address"
                  name="address"
                  autoComplete="street-address"
                  multiline
                  rowsMax="4"
                  className={classes.textField}
                  margin="normal"
                  helperText="Item will be delivered to this address"
                  variant="outlined"
                  fullWidth
                  />
                <Button type="submit"  className={classes.button} variant="contained" color='secondary' size='small'>Checkout with Paypal</Button>
            </form>
            <div id="paypal-checkout" className={classes.paypal}></div>
      </Grid>
    )
  }
}
const mapStateToProps = state =>({
  sumTotal:state.cart.sumTotal
})
export default connect(mapStateToProps)(withStyles(styles)(Checkout))
