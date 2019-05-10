const styles= theme=>({
  brands:{
    display:'flex',
    position:'relative',
    width:'100%',
    justifyContent:'space-between',
    [theme.breakpoints.up('sm')]:{
      width:'560px',
      margin:'0 auto'
    }
  },
  card:{
    width:'33%',
    backgroundColor:'#fff',
  },
  img:{
    width:'60%',
    margin:'0 auto',
    [theme.breakpoints.up('sm')]:{
      width:'50%'
    },
    '& img':{
    width:'100%',
    margin:'0 auto',
    },
  }
})

export default styles;
