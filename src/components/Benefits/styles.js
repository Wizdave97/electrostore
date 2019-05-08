const styles= theme=>({
  benefits:{
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
    width:'20%',
    backgroundColor:'#fff',
    [theme.breakpoints.up('sm')]:{
      width:'10%'
    },
    '& img':{
      width:'100%'
    }
  }
})

export default styles;
