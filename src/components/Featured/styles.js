const styles = theme =>({

  root:{
    display:'flex',
    width:'100%',
    paddingTop:'56.25%',
    position:'relative',
    margin:0
  },
  notch:{
    width:'60px',
    height:'60px',
    backgroundColor:'white',
    position:'absolute',
    zIndex:1000,
    left:'calc((100% - 60px ) / 2)',
    top:'-30px',
    transform:'scaleY(0.3) rotate(45deg)',
    [theme.breakpoints.up('sm')]:{
      width:'200px',
      height:'200px',
      top:'-100px',
      left:'calc((100% - 200px ) / 2)',
    }
  },
  carousel:{
    width:'100%',
    position:'absolute',
    display:'none',
    left:0,
    right:0,
    bottom:0,
    top:0,
    padding:0,
    boxSizing:'border-box',
    height:'100%',
    '& img':{
      width:'100%',
      height:'auto'
    }
  },
  fade:{
    animation:'fade 2s'
  },
  '@keyframes fade':{
    from:{
      opacity:0.4
    },
    to:{
      opacity:1
    }
  },
  dots:{
    position:'absolute',
    width:'20px',
    height:'10px',
    display:'flex',
    justifyContent:'space-between',
    top:'95%',
    left:'calc( ( 100% - 20px ) / 2)',
    '& span':{
      width:'8px',
      height:'8px',
      borderRadius:'50%',
      backgroundColor:'white'
    }
  },
  active:{
    backgroundColor:`${theme.palette.secondary.main} !important`,
    transition:'background-color 0.5s'
  }
})

export default styles;
