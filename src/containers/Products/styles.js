const styles = theme=> ({
  products:{
    display:'flex',
    width:'100%',
    flexWrap:'wrap'
  },
  allProducts:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    boxSizing:'border-box'
  },
  item:{
    width:'45%',
    margin:'0px auto',
    [theme.breakpoints.up('sm')]:{
      width:'30%'
    },
    [theme.breakpoints.up('md')]:{
      width:'23%'
    }
  },
  sectionTitle:{
    width:'100%',
    display:'flex',
    flexWrap:'nowrap'
  },
  divider:{
    alignSelf:'center',
    margin:'0 10px',
    boxSizing:'border-box',
    flex:1
  }
})

export default styles;
