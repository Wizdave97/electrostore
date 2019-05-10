const styles = theme => ({
  editorsChoice:{
    display:'flex',
    flexWrap:'wrap',
    width:'100%',
    height:'auto',
    padding:0,
    margin:0,
    justifyContent:'flex-start',
    boxSizing:'border-box'
  },
  item:{
    width:'45%',
    [theme.breakpoints.up('sm')]:{
      width:'33%'
    },
    [theme.breakpoints.up('md')]:{
      width:'25%'
    }
  }

  })

  export default styles;
