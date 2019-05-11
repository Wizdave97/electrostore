
const styles = theme =>({
  card:{
    width:'100%',
    height:'auto',
    overflow:'hidden',
    boxSizing:'border-box',
    margin:'5px 0',
    cursor:'pointer',
    '&:hover .Item-media-277 .addToButton-button-282':{
      transform:'translate(0%,0%) !important',
    }
  },
  media:{
    width:'100%',
    display:'flex',
    padding:'30px',
    position:'relative',
    boxSizing:'border-box',
    '& img':{
      maxWidth:'100%',
      height:'auto',
      animation:'scaleup 0.5s linear 2s',
      transition:'transform 2s'
    },
    '&:hover img':{
      transform:'scale(1.2,1.2)'
    }
  },
  cardDetails:{
    width:'100%',
    display:'flex',
    padding:'2px 8px',
    boxSizing:'border-box',
    justifyContent:'space-between'
  },
  wishlist:{
    left:0,
    bottom:0,
    borderTopRightRadius:'0.5rem',
    transform:'translate(-100%,-100%)',
    [theme.breakpoints.down('xs')]:{
      transform:'translate(0%,0%) !important'
    }
  },
  cart:{
    right:0,
    bottom:0,
    borderTopLeftRadius:'0.5rem',
    transform:'translate(100%,100%)',
    [theme.breakpoints.down('xs')]:{
      transform:'translate(0%,0%) !important'
    }
  },
  text:{
    color:theme.palette.secondary.dark,
    [theme.breakpoints.down('xs')]:{
      fontSize:'0.8rem'
    }
  },
  '@keyframes scaleup':{
    from:{
      transform:'scale(0.5,0.5)'
    },
    to:{
      transform:'scale(1,1)'
    }
  }
})

export default styles;
