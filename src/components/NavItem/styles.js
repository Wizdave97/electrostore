import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme =>({
    menu:{
        display:'flex',
        flexGrow:1,
        height:'100%',
        '&:hover':{
            backgroundColor: fade(theme.palette.primary.dark, 0.15)
        },
        cursor:'pointer'
    },
    navText:{
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        width:'100%',
        marginTop:'auto',
        marginBottom:'auto'
    }
})

export default styles;