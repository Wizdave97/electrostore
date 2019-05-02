import { fade } from '@material-ui/core/styles/colorManipulator';

 const  styles= theme=>({
    logoText:{
        fontSize:'1em',
        fontFamily:'"Sofia", sans-serif',
        flexGrow:1
    },
    nav:{
        boxShadow:'none'
    },
    logoContainer:{
        width:'48px',
        height:'48px',
        padding:'0',
        margin:'0',
    },
    logo:{
        width:'100%',
        height:'48px'
    },
    menuItems:{
        display:'none',
        flexGrow:1,
        padding:0,
        marginTop:'auto',
        marginBottom:'auto',
        height:'48px'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
      },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: 200,
        },
    },
    search: {
        position: 'relative',
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
    '@media screen and (max-width:663px)':{
        search:{
            display:'none'
        }
    },
    '@media screen and (min-width:664px)':{
        menuIcon:{
            display:'none'
        },
        menuItems:{
            display:'flex'
        },
        logoTextMd:{
            textAlign:'left'
        },
        logoText:{
            flexGrow:0
        }
    }
})

export default styles;