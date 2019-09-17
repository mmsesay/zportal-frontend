import Link from 'next/link';
import useStyles from './styles'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';


// style
const linkStyle = {
    marginRight: 15
};
  
// header function
export default function Header(){

    const classes = useStyles();

    // Side nav trigger
    let SideNavTrigger = (
        <div style={{display:'flex'}}>  
            <IconButton
                edge="start" 
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
            >
                <MenuIcon className={classes.menuIcon} />
            </IconButton>
        </div>
      )
        
    // this holds the search nav field
      let NavSearchField = (
        <div className={classes.search}>
                  
          <InputBase
            placeholder="Search for a job"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton  className={classes.iconButton} aria-label="search">
            <SearchIcon style={{fontSize: '30px'}} />
          </IconButton> 
        </div>  
      )
            
    //   this variable holds the navigation contents
      let NavContent = (
        <div style={{display: 'flex', marginRight: '100px'}}>
  
          {/* link to home */}
            <Link href="/" className={classes.button}>
                <a style={linkStyle}>Home</a>
            </Link>

            {/* link to create */}
            <Link href="/create" className={classes.button}>
                <a style={linkStyle}>Create</a>
            </Link>

            {/* link to employer */}
            <Link href="/employer" className={classes.button}>
                <a style={linkStyle}>Employer</a>
            </Link>

            {/* link to about */}
            <Link href="/about" className={classes.button}>
                <a style={linkStyle}>About</a>
            </Link>
        </div>
      )

    return(
        <div>
            <AppBar style={{display: 'flex', justifyContent:'space-between', backgroundColor: '#253335'}}>
                <Toolbar className={classes.root}>
                    {SideNavTrigger }
                    <div  style={{display:'flex', zIndex: 1000, boxShadow: '30px'}}>
                        <Paper className={classes.navMenuHolder}>
                            {NavSearchField}
                            {NavContent }
                        </Paper>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}