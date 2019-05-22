const styles = theme => ({
  container:{
    display:'flex'
  },
  auth:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    alignSelf:'center'
  },
  authForm:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    boxSizing:'border-box',
    padding:'30px'
  },
  paper:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    padding:'40px',
    boxSizing:'border-box'
  },
  form:{
    display:'flex',
    flexWrap:'wrap',
    width:'100%'
  },
  logoContainer:{
    width:'100%',
    display:'flex',
    padding:'5px',
    boxSizing:'border-box',
    '& div':{
      width:'30%',
      margin:'0 auto',
      transform:'rotate(30deg)',
      '& img':{
        width:'100%',
        height:'auto'
      }
    }
  },
  heading:{
    width:'100%',
    padding:'5px',
    boxSizing:'border-box',
    display:'flex'
  },
  authDetails:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    boxSizing:'border-box',
  },
  textField:{
    marginBottom:theme.spacing.unit
  },
  button:{
    margin:`${theme.spacing.unit}px auto`
  },
  authState:{
    display:'flex',
    width:'100%',
    flexWrap:'wrap'
  }
})

export default styles
