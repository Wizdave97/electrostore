const styles = theme=>({
    root:{
        display:'none',
        height:'100%',
        width:0,
        opacity:0,
        transition:'width 0.5s,transform 0.5s,opacity 0.5s'
    },
    show:{
        display:'flex !important',
        opacity:'1 !important',
        transform:'translate(-80%)',
        width:'80% !important',
        [theme.breakpoints.up('sm')]: {
            width: '50% !important',
            translate:'translate(-50%)'
          },
        [theme.breakpoints.up('md')]: {
            width: '30% !important',
            translate:'translate(-30%)'
          },  
    }

})

export default styles;