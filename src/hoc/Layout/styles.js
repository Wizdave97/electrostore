 const styles = theme =>({
    root:{
        minHeight:'100%',
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        order:1,
        transition:'transform 0.5s'
    },
    show:{
        transform:'translate(-80%)',
        [theme.breakpoints.up('sm')]: {
            transform:'translate(-50%)'
          },
        [theme.breakpoints.up('md')]: {
            transform:'translate(-30%)'
          }
    },
    main:{
        minHeight:'calc(100% - 64px)',
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        marginTop:'64px'
    }
})

export default styles
