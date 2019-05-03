const styles = theme=>({
    root:{
        display:'none',
        height:'100%',
        width:0,
        opacity:0,
        right:0,
        transition:'width 0.5s,opacity 0.5s',
        position:'fixed',
        flexDirection:'column',
        order:2
    },
    show:{
        display:'flex !important',
        opacity:'1 !important',
        width:'80% !important',
        [theme.breakpoints.up('sm')]: {
            width: '50% !important',
          },
        [theme.breakpoints.up('md')]: {
            width: '30% !important',
          },
    },
    profile:{
      width:'100%',
      height:'25%',
      backgroundColor:theme.palette.secondary.light
    }

})

export default styles;
