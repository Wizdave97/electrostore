const styles = theme => ({
  paypal:{
    width:'100%',
    display:'flex'
  },
  form:{
    display:'flex',
    flexWrap:'wrap',
    padding:'12px',
    boxSizing:'border-box',
    width:'100%'
  },
  textField:{
    marginLeft:theme.spacing.unit,
    marginRight:theme.spacing.unit
  },
  button:{
    fontSize:'0.9rem',
    margin:theme.spacing.unit,
    [theme.breakpoints.up('sm')]:{
      fontSize:'1rem'
    }
  }
})

export default styles;
