import React from 'react'
import '../../styles/index.css'
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import MenuIcon from '@material-ui/core/Menu'
import Hidden from '@material-ui/core/Hidden'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Avatar, Drawer } from '@material-ui/core'
import UserIcon from '../../images/userAccAvarta.svg'
import Hambuger from '../../images/hamburger.svg'
import Slide from '@material-ui/core/Slide'
import useStyles from '../styles'




function Dashboard (props){

  const classes = useStyles()
    const [data, setData] = React.useState({
        isLoginIn:false,
        data:'',
        stubData:[
            {}
        ]
    })

    const [userOpen, setInteraction] = React.useState(false)
    const anchorRef = React.useRef(null)

    const [sideMenuState, setSideMenuState] = React.useState({left:false})

    const handleUserMenu = (event) =>{
      setInteraction(userOpen=>!userOpen)
    }
    const toggleSideNav = (side, open) => (event) =>{
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setSideMenuState({...sideMenuState, [side]:open})
    }
    
    function handleClose(){
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      setInteraction(false);
    }
    // marginRight: theme.spacing(4),
    // fontWeight: '30px',
    // color: '#1e5b49',
    // marginTop:'-90px',

    let SideNavTrigger = (
      <Hidden smUp className="btn">
      <IconButton
          edge="start" 
          className="font-bold bg-white text-white mt-3 w-12 h-12"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSideNav('left', true)}
         
        >Clk
          <MenuIcon className="w-12 h-12 bg-white text-white"/>
        </IconButton>
      </Hidden>
    )


    const avartaMenu =(
      <div className="flex justify-center mr-9">
        <button className="btn  bg-white"
              ref={anchorRef}
              aria-controls="menu-list-grow"
              aria-haspopup="true"
              onClick={handleUserMenu}
            ><Avatar src={`${UserIcon}`} className='-m-2' /></button>
        <Popper open={userOpen} keepMounted transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom', marginTop:'40px' }}
            >
              <Paper id="menu-list-grow">
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
        )

        const sideNavContent = (side) =>  (
          <div className="flex min-h-screen w-52 flex-col flex-wrap self-stretch mt-21 bg-primary-dark"
          // role="presentation"
          // onClick={toggleSideNav(side, false)}
          // onKeyDown={toggleSideNav(side, false)}
          >
            <div className="text-white p-12 mt-12 pt-16">
              <button className="bg-white "><img src={Hambuger} /></button>
              <div className="bg-primary-dark text-secondary">Active</div>
            </div>
            <div className="bg-white h-1"></div>
            <div className="p-12">
              <button><img src={Hambuger} /></button>
              <div className="bg-primary-dark text-secondary">Active</div>
            </div><div className="bg-white h-1"></div>
            <div className="p-12">
              <button><img src={Hambuger} /></button>
              <div className="bg-primary-dark text-secondary">Active</div>
            </div>
          </div>
        )

        const floatingSideMenu = (side) => (
          <div className="static z-10 mt-30"
            role="presentation"
            className="w-36 z-30 h-full"
            open={sideMenuState.left}
            onClose={toggleSideNav('left', false)}
            onOpen={toggleSideNav('left', true)}
              >
              <Drawer open={sideMenuState.left} onClose={toggleSideNav('left', false)}>
              {sideNavContent(side)}
              </Drawer>
          </div>
        )

    
    const navBar = (
        <nav className="flex relative items-start bg-primary h-auto" >
            <div className="flex justify-start items-center self-stretch px-4 py-2 m-0 bg-dark text-white">
                {/* <button className=" bg-white md:hidden">
                  <img  src={`${Hambuger}`} />
                </button> */}
                <div className="btn btn-white">
                  {SideNavTrigger}
                </div>
               
                <div className="font-semibold pr-4 text-xl">App Name</div>
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2 text-white">
                <span>Organisation Name</span>
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
            {avartaMenu}
            </div>
        </nav>
    )



    return (
            <div>
              <div className="fixed w-full z-50 mt-0">
                {navBar}
              </div>
             
              <div className=" flex self-stretch relative">
              <Hidden smDown>
                <div className="">
                  {sideNavContent}
                </div> </Hidden>
                {floatingSideMenu('left')}
              </div>
            </div>
    )

}


export default Dashboard