import { fade } from '@material-ui/core/styles/colorManipulator';

 const  styles= theme=>({
    logoText:{
        fontSize:'1em',
        fontFamily:'"Sofia", sans-serif',
        flexGrow:1
    },
    logoContainer:{
        width:'48px',
        height:'48px',
        padding:'0',
        margin:'0',
    },
    menuIcon:{
        width:'48px',
        height:'48px',
        '&:hover':{
            backgroundColor: fade(theme.palette.primary.dark, 0.15)
        },
        cursor:'pointer'
    },
    logo:{
        width:'100%',
        height:'48px'
    },
    wishlist:{
        display:'none'
    },
    account:{
        display:'none'
    },
    menuItems:{
        display:'none',
        flexGrow:1,
        padding:0,
        marginTop:'auto',
        marginBottom:'auto',
        height:'48px',
        '& div a':{
          textDecoration:'none'
        }
    },
    hitsPosition:{
      minWidth:'500px',
      top:'auto',
      left:'calc((100% -  500px) / 2)'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
        display:'flex',
        '& form ':{
          color: 'inherit',
          width: '100%',
          display:'flex',
          position:'relative',
          boxSizing:'border-box'
        },
        '& form input':{
          color: 'inherit',
          paddingTop: theme.spacing.unit,
          paddingRight: theme.spacing.unit,
          paddingBottom: theme.spacing.unit,
          paddingLeft: theme.spacing.unit,
          backgroundColor: 'transparent',
          transition: theme.transitions.create('width'),
          flex:1,
          minHeight:'100%',
          border:'none',
          [theme.breakpoints.up('md')]: {
            width: 200,
          },
        },
        '& form button':{
          outline:'none',
          minHeight:'100%',
          backgroundColor: 'transparent',
          border:'none'
        }
    },
    search: {
        position: 'relative',
        boxSizing:'border-box',
        borderRadius: theme.shape.borderRadius,
        borderColor:theme.palette.primary.dark,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    '@media screen and (max-width:767px)':{
        search:{
            display:'none'
        }
    },
    '@media screen and (min-width:768px)':{
        menuItems:{
            display:'flex'
        },
        logoTextMd:{
            textAlign:'left'
        },
        logoText:{
            flexGrow:0
        }
    },
    '@media screen and (min-width:860px)':{
        wishlist:{
            display:'flex'
        }
    },
    '@media screen and (min-width:1024px)':{
        account:{
            display:'flex'
        }
    }
})

export default styles;
