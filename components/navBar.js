import React from 'react';
import Link from 'next/link'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper'
import useStyles from '../components/styles'




  export default function NavBar() {

    const classes = useStyles();

    const navItems = ['Create', 'Login', 'Employer', 'About']

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
          <SearchIcon style={{fontSize: '60px'}} />
        </IconButton> 
      </div>  
    )

    let NavContent = (
      <div style={{display: 'flex', marginRight: '100px'}}>

        {navItems.map((item) => 
            <Link href={`/${item.toLowerCase()}`}>
                <Button color="secondary" className={classes.button}>
                  {item}
                </Button>
            </Link>
          )}
      </div>
    )
  
    return (
      <div >
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