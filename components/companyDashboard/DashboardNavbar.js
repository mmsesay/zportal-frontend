import React from 'react';
import Link from 'next/link'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import JobIcon from '@material-ui/icons/Work'
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined'
import SettingsIcon from '@material-ui/icons/Settings'
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ClickAwayListener, Menu, MenuItem, Button } from '@material-ui/core';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  drawer: {
    zIndex:'10',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    zIndex:'1000',
    backgroundColor:'#1C4947',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      width: '100%',
      zIndex:'100',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    overflowY:'hidden',
    width: drawerWidth,
    backgroundColor:'#253235',
    color:'#EF881C',
  },
  navTool:{
    display:'flex',
    justifyContent:'space-between'
  },
  compName:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'#000000',
    alignSelf:'stretch',
    alignContent:'center',
    padding:'10px 45px 10px 50px',
    marginLeft:'-25px'
    
  },
  content: {
    flexGrow: 1,
    backgroundColor:'#BCBBBB',
    padding: theme.spacing(3),
  },
  sideMenu:{
      display:'flex',
      paddingTop:'15px',
      flexDirection:'column',
      justifyContent:'center',
      fontSize:'50px',
      fontWeight:'bold',
      position:'relative',
  },
  activeIcon:{
    color:'#AA2223',
    width:'80px',
    height:'80px',
  },
  sideMenuIcon:{
      color:'white',
      width:'80px',
      height:'80px',
  },
  divider:{
      backgroundColor:'white',
  },
  sideMenuText:{
    fontSize:'50px',
    fontWeight:'90px',
  },
  activeMark: {
    paddingTop:'15px',
    flexDirection:'column',
    justifyContent:'center',
    paddingRight:'-23px',
    fontSize:'50px',
    fontWeight:'bold',
    borderLeft: '0.5rem solid',
    borderColor:'#AA2223',
    // borderRight:'0.4rem solid white',
    backgroundColor:'#fff',
    '&:hover':{
      backgroundColor:'#fff',
    },
    color:'#AA2223',
    '&::after':{
      content:"''",
      position: 'absolute',
      left: 'auto',
      right: '0',
      margin: '0 auto',
      width: '0',
      height: '0',
      borderRight: '25px solid #BCBBBB',
      borderBottom: '25px solid transparent',
      borderTop: '25px solid transparent'
    },
  }
}))

function DashboardNavBar(props) {
  const activeTab = props.activeTab
  const classes = useStyles();
  const theme = useTheme();
  const [onMobileView, setMobileView] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null)

  function handleUserDropMenu (event){
    setAnchorEl(event.currentTarget)
  }

  function handleClose(){
    setAnchorEl(null)
  }

  function handleSideNavToggle() {
    setMobileView(!onMobileView);
  }

  const sideNavContent = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <Link href='/Dashboard' button className={activeTab=='Active'? classes.activeMark: classes.sideMenu}>
        <ListItem button  key={'Active'} className={activeTab=='Active'? classes.activeMark: classes.sideMenu}>
        <ListItemIcon><HomeIcon className={activeTab=='Active'? classes.activeIcon: classes.sideMenuIcon}/></ListItemIcon>
        <span>Active</span>
        </ListItem></Link>
        <Divider className={classes.divider}/>
        <Link href='/DashboardJobs' button key={'Jobs'} className={activeTab=='Jobs'? classes.activeMark: classes.sideMenu}>
        <ListItem button key={'Jobs'} className={activeTab=='Jobs'? classes.activeMark: classes.sideMenu}>
        <ListItemIcon><JobIcon className={activeTab=='Jobs'? classes.activeIcon: classes.sideMenuIcon}/></ListItemIcon>
            <span>Jobs</span>
        </ListItem></Link>
        <Divider className={classes.divider}/>
        <Divider className={classes.divider}/>
        <Link href='/DashboardProfile' className={activeTab=='Profile'? classes.activeMark: classes.sideMenu}>
        <ListItem button key={'Profile'}
          className={activeTab=='Profile'? classes.activeMark: classes.sideMenu}
        >
        <ListItemIcon><SettingsIcon className={activeTab=='Profile'? classes.activeIcon: classes.sideMenuIcon}/></ListItemIcon>
        <span>Profile</span>
        </ListItem></Link>
        <Divider className={classes.divider}/>
        <Divider className={classes.divider}/>
      </List>
    </div>
  );
 
  const sideNavTrigger = (
    <Hidden smUp>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleSideNavToggle}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton></Hidden>
  )

  const navBarContent = (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.navTool}>
        <Typography variant="h6" className={classes.compName} noWrap>
        {sideNavTrigger}
            Company Name
          </Typography>
          <Typography variant="h6" noWrap>
            Organization Name
          </Typography>
            <div>
              <IconButton
                aria-controls="user-dropdown"
                aria-haspopup="true"
                variant='contained'
                onClick={handleUserDropMenu}
                color="inherit"
              >
                <AccountCircle />
                <ArrowDropDownOutlinedIcon style={{marginTop:'20px', marginLeft:'-10px'}}/>
              </IconButton>
              <Menu
                style={{marginTop:'40px'}}
                id='user-dropdown'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Log out</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />
      {navBarContent}
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            // container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={onMobileView}
            onClose={handleSideNavToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {sideNavContent}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {sideNavContent}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

DashboardNavBar.propTypes = {
  activeTab: PropTypes.string.isRequired
};

export default DashboardNavBar;
