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
    width:'33%',
    backgroundColor:'#fff'
  },
  img:{
    width:'60%',
    margin:'0 auto',
    [theme.breakpoints.up('sm')]:{
      width:'50%'
    }},
    icon:{
      width:'100%',
      height:'100%'
    }
})

export default styles;
