const styles = theme => ({
  editorsChoice:{
    display:'flex',
    flexWrap:'wrap',
    width:'100%',
    height:'auto',
    padding:0,
    margin:0,
    justifyContent:'space-between',
    boxSizing:'border-box'
  },
  item:{
    width:'45%',
    [theme.breakpoints.up('sm')]:{
      width:'30%'
    },
    [theme.breakpoints.up('md')]:{
      width:'23%'
    }
  }

  })

  export default styles;
