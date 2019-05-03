 const styles = theme =>({
    root:{
        height:'100%',
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        transition:'transform 0.5s'
    },
    show:{
        translate:'translate(-80%)',
        [theme.breakpoints.up('sm')]: {
            translate:'translate(-50%)'
          },
        [theme.breakpoints.up('md')]: {
            translate:'translate(-30%)'
          }    
    },
    main:{
        height:'calc(100% - 64px)',
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        marginTop:'64px'
    }
})

export default styles