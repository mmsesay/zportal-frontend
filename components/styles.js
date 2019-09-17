import { fade, makeStyles } from '@material-ui/core/styles';
// import bgImage from '../static/images/NavBarBg.svg'

const useStyles = makeStyles(theme => ({
    root: {
      display:'flex', 
      justifyContent:'space-between',
      // backgroundImage: `url(${bgImage})`,
      backgroundRepeat:'no-repeat', 
      backgroundSize:'cover', 
      width: '100%', 
      height:'70px',
    },
    navMenuHolder:{
        backgroundColor: `#fff`, 
        display: 'flex', 
        marginTop: '-15px', 
        borderRadius:'9px', 
        position:'relative', 
        height:'50px'
    },
    menuButton: {
      marginRight: theme.spacing(4),
      fontWeight: 30,
      color: '#1e5b49',
    },
    menuIcon:{
        fontSize: 90, 
        height: '50px', 
        width: '90px', 
        fontWeight: 90, 
        marginTop: '-10px'
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
      height:'64px',
      padding: '5px',
      transition: theme.transitions.create('fontWeight'),
      fontSize: '30px',
      fontStyle: 'Proxima Nova regular',
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
      height: '40px',
      margin: '5px 5px 5px 0px',
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
    }
  }));


export default useStyles