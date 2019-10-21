// loading the components
import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Paper from '@material-ui/core/Paper'
import useStyles from './styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import { Slide, Drawer } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import UserStatus from './UserStatus';

//Hiding the navbar with background image on scroll
function HideOnScroll(props){
  const{children, window} = props

  const trigger = useScrollTrigger({target:window?window(): undefined})
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

// Showing the navBar without the background image
function ShowOnScroll(props){
  const{children, window} = props

  const trigger = useScrollTrigger({target:window?window(): undefined})
  // isSticky = trigger
  // console.log('is sticky:     ', isSticky)
  return (
    <Slide in={trigger}>
      {children}
    </Slide>
  )
}

HideOnScroll.protoTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
}


// NavBar functions
 function Header(props) {
    const classes = useStyles()
    const [sideMenuState, setSideMenuState] = React.useState({left: false})
    const{width, window, activePage} = props

     var isSticky = useScrollTrigger({target:window?window(): undefined})

    const toggleSideNav = (side, open) => event =>{
      setSideMenuState({...sideMenuState, [side]: open})
    }
    // Hides the sideNav trigger(hamburger) from large screen to up
    let SideNavTrigger = (
      <Hidden lgUp>
      <div style={{display:'flex'}}> 
      <IconButton
          edge="start" 
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSideNav('left', true)}
          
          style={{color:`${isSticky?'#ffffff':'#1e5b49'}` }}
        >
          <MenuIcon className={classes.menuIcon} style={{top:`${isSticky?'-20':''}` }}/>
        </IconButton>
      </div>
      </Hidden>
    )

    // NavBar search field
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
          <SearchIcon style={{fontSize: '35px', paddingBottom:'9px'}} />
        </IconButton> 
      </div>  
    )

    // Navigation links items
    let navLinks = (
      <div style={{display:'flex', flexFlow:'wrap', marginRight: '100px'}}>
        <Link href="/employer">
        <Button color="secondary" className={`${classes.button} ${activePage=='employer'?classes.activeLink:''}`}>Employers</Button>
        </Link>
        <Link href="/about"> 
        <Button color="secondary" className={`${classes.button} ${activePage=='about'?classes.activeLink:''}`}>About</Button>
        </Link>
        <UserStatus />
      </div>
    )
    // NavBar headings or content
    let NavContent = (
      <div  style={{display:'flex', zIndex: 100, boxShadow: '30px', marginLeft:'auto'}}>
        <Paper className={classes.navMenuHolder}>
        {NavSearchField}
        <Hidden mdDown>
          {navLinks}
        </Hidden>
        </Paper>
      </div>
    )

    // setting the navbar without an image to fixed
    let StickNavBar = (
      <ShowOnScroll >
      <AppBar position='fixed' className={classes.sticktyAppBar}>
          <Toolbar className={classes.stickyRoot}>
          {SideNavTrigger }
          {NavContent}
          </Toolbar>
          </AppBar>
      </ShowOnScroll>
    )

    // SideNav demo
    let sideMenu = side => (
      <div position="relative" style={{width:'240px', zIndex:'1500'}}
      role="presentation"
      onClick={toggleSideNav(side, false)}
      onKeyDown={toggleSideNav(side, false)}
      >
      {navLinks}
      </div>
    )

    return (
      <div >
        <HideOnScroll {...props}>
          <AppBar style={{display: 'flex', position:'relative', justifyContent:'space-between', boxShadow:'none', backgroundColor: '#253335'}}>
          <Toolbar className={classes.root} >
          {SideNavTrigger }
          {NavContent}
          </Toolbar>
          </AppBar>
          </HideOnScroll>
          {StickNavBar}
          <Drawer open={sideMenuState.left} onClose={toggleSideNav('left', true)}>
            {sideMenu('left')}
          </Drawer>
      </div>
    ); 
  }


  Header.propTypes = {
    width: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
    activePage: PropTypes.string.isRequired,
    name:PropTypes.string,
    image:PropTypes.string,
  }

  export default withWidth()(Header)