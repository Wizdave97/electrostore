const styles = theme=> ({
  wishlist:{
    display:'flex',
    width:'100%',
    flexWrap:'wrap'
  },
  allWishlistItems:{
    width:'100%',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'flex-start',
    boxSizing:'border-box'
  },
  item:{
    width:'100%',
    margin:'auto auto'
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
  },
  checkout:{
    margin:'auto auto'
  }
})

export default styles;
