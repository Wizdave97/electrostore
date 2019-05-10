
const styles = theme =>({
  card:{
    width:'100%',
    height:'auto',
    overflow:'hidden',
    boxSizing:'border-box',
    '&:hover .Item-media-238 .addToCart-button-241':{
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
  name:{
    flex:1
  }
})

export default styles;
