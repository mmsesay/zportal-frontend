  

import { fade, makeStyles } from '@material-ui/core/styles';
import bgImage from '../images/NavBarBg.svg'

const useStyles = makeStyles(theme => ({
    root: {
      display:'flex', 
      justifyContent:'space-between',
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat:'no-repeat', 
      backgroundSize:'cover', 
      width: 'auto',
      height:'200px',
    },
    navMenuHolder:{
        backgroundColor: `#fff`, 
        display: 'flex', 
        marginTop: '-95px', 
        marginBottom:'10px',
        marginRight:'-24px',
        position:'relative', 
        borderRadius:'0px',
        height:'55px',
        [theme.breakpoints.down('md')]:{
          // marginRight:'-5px'
        }
    },
    menuButton: {
      marginRight: theme.spacing(4),
      fontWeight: '30px',
      color: '#1e5b49',
      marginTop:'-90px',
      
    },
    menuIcon:{
        position:'relative',
        fontSize: '30px', 
        height: '40px', 
        width: '60px',

    },
    title: {
      flexGrow: 1,  
      display: 'none',
      marginTop: '-60px',
      [theme.breakpoints.up('sm')]: {
        display: 'inline',
      },
      paddingLeft:'2px',
    },
    button: {
      margin: theme.spacing(1),
      marginRight: '2px',
      textTransform: 'none',
      height:'40px',
      marginTop:'0px',
      textAlign:'center',
      transition: theme.transitions.create('fontWeight'),
      fontSize: '20px',
      height:'100%',
      borderRadius: '0px',
      fontFamily: 'proxima Nova regular',
      color: '#ef891c',
      '&:hover':{
        color: '#ffffff',
        backgroundColor: '#1e5b49',
        fontWeight: 'bold',
      }
    },
    search: {
      position: 'relative',
      display: 'flex',
      height: '45px',
      margin: '2px 5px 5px 0px',
      border: '3px solid #1e5b49', 
      borderRadius: 10, 
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      }, 
    }, 
    searchIcon: {
      width: theme.spacing(7),
      position: 'absolute',
      pointerEvents: 'none',
      alignItems: 'right',
      justifyContent: 'right',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 5),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 250,
        '&:focus': {
          width: 400,
        },
      },
    },
    iconButton:{
      padding: 10,
      borderRadius: 6,
      color: '#fff',
      width: '60px',
      backgroundColor: '#1e5b49',
      '&:hover':{
        color: '#ef891c',
        backgroundColor: '#1e5b49',
      }
    },
    sticktyAppBar:{
      display: 'flex',
      justifyContent:'space-between', 
      backgroundColor: '#253335', 
      paddingTop:'64px',
      marginBottom:'-10px',
      height: '40px'
    },
    stickyRoot:{
      display:'flex', 
      justifyContent:'space-between', 
      width: '100%',
      marginBottom:'-50px', 
      marginRight:'-20px',
      height: '75px'
    },
    navMenuOnMd:{
      [theme.breakpoints.up('lg')]:{
        marginRight:'-50px',
        justifyContent:'space-around',
      }
    },
    activeLink:{
      color: '#ffffff',
      backgroundColor: '#1e5b49',
      fontWeight: 'bold',
      height:'100%',
    }
  }));


export default useStyles