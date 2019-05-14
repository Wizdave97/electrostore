const styles= theme => ({
  card:{
    width:'100%',
    margin:'10px auto',
    display:'flex',
    flexWrap:'wrap',
    boxSizing:'border-box',
    justifyContent:'space-between'
  },
  image:{
    width:'100%',
    padding:'30px',
    boxSizing:'border-box',
    margin:'auto auto',
    '& img':{
      width:'100%',
      height:'auto'
    },
    [theme.breakpoints.up('sm')]:{
      width:'38%'
    },
    [theme.breakpoints.up('md')]:{
      width:'23%'
    }
  },
  others:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-between',
    [theme.breakpoints.up('sm')]:{
      width:'58%'
    },
    [theme.breakpoints.up('md')]:{
      width:'73%'
    }
  },
  details:{
    width:'100%',
    padding:'5px',
    display:'flex',
    boxSizing:'border-box',
    alignContent:'center',
    '& p':{
      alignSelf:'center',
      margin:'auto auto',
      fontSize:'0.8rem',
      [theme.breakpoints.up('sm')]:{
        fontSize:'1.2rem'
      }
    },
    [theme.breakpoints.up('md')]:{
      width:'30%'
    }
  },
  quantity:{
    width:'100%',
    display:'flex',
    alignContent:'center',
    justifyContent:'center',
    [theme.breakpoints.up('md')]:{
      width:'30%'
    }
  },
  delete:{
    width:'100%',
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
    [theme.breakpoints.up('md')]:{
      width:'30%'
    }
  }
})

export default styles;
