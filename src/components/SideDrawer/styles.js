import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme=>({
    root:{
        display:'none',
        height:'100%',
        width:0,
        opacity:0,
        right:0,
        transition:'width 0.5s,opacity 0.5s',
        position:'fixed',
        flexDirection:'column',
        order:2
    },
    show:{
        display:'flex !important',
        opacity:'1 !important',
        width:'80% !important',
        [theme.breakpoints.up('sm')]: {
            width: '50% !important',
          },
        [theme.breakpoints.up('md')]: {
            width: '30% !important',
          },
    },
    profile:{
      width:'100%',
      height:'25%',
      display:'flex',
      flexWrap:'wrap',
      backgroundColor:theme.palette.secondary.light,
    },
    picture:{
      alignSelf:'center',
      height:'100px',
      width:'40%',
      borderRadius:'50%',
      marginLeft:'auto',
      marginRight:'auto',
      backgroundSize:'cover'
    },
    list:{
      width:'100%',
      flexGrow:1,
      '& a':{
        textDecoration:'none',
        color:'inherit'
      }
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
        },
        '& form button':{
          outline:'none',
          minHeight:'100%',
          backgroundColor: 'transparent',
          border:'none'
        }
    },
    hitsPosition:{
      width:'100%',
      left:0,
      top:'auto'
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

})

export default styles;
