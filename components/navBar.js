import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Paper from '@material-ui/core/Paper'
import useStyles from '../components/styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import Header from '../components/Header'
import { Slide, Drawer } from '@material-ui/core'

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
 function NavBar(props) {

    const classes = useStyles()
    const {width} = props
    const [sideMenuState, setSideMenuState] = React.useState({left: false})

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
        >
          <MenuIcon className={classes.menuIcon} />
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
          <SearchIcon style={{fontSize: '60px'}} />
        </IconButton> 
      </div>  
    )

    // NavBar headings or content
    let NavContent = (
      <div  style={{display:'flex', zIndex: 1000, boxShadow: '30px', marginLeft:'auto'}}>
        <Paper className={classes.navMenuHolder}>
        {NavSearchField}
        <Hidden mdDown>
          <Header />
        </Hidden>
        </Paper>
      </div>
    )

    // setting the navbar without an image to fixed
    let StickNavBar = (
      <ShowOnScroll >
      <AppBar position='fixed' style={{display: 'flex', justifyContent:'space-between', backgroundColor: '#253335', paddingTop:'70px'}}>
          <Toolbar style={{display:'flex', justifyContent:'space-between', marginBottom:'-40px', marginRight:'-50px'}}>
          {SideNavTrigger }
          {NavContent}
          </Toolbar>
          </AppBar>
      </ShowOnScroll>
    )

    // SideNav demo
    let sideMenu = side => (
      <div style={{width:'240px' }}
      role="presentation"
      onClick={toggleSideNav(side, false)}
      onKeyDown={toggleSideNav(side, false)}
      >
      <Header />
      </div>
    )

    return (
      <div >
        <HideOnScroll {...props}>
          <AppBar style={{display: 'flex', justifyContent:'space-between', boxShadow:'none', backgroundColor: '#253335'}}>
          <Toolbar className={classes.root}>
          {SideNavTrigger }
          {NavContent}
          </Toolbar>
          </AppBar>
          </HideOnScroll>
          {StickNavBar}
          <Drawer open={sideMenuState.left} onClose={toggleSideNav('left', false)}>
            {sideMenu('left')}
          </Drawer>
      </div>
    ); 
  }


  NavBar.propTypes = {
    width: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']).isRequired
  }

  export default withWidth()(NavBar)