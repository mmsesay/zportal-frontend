import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Profile from '../components/employerProfile'
import DashboardNavBar from '../components/companyDashboard/DashboardNavbar'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
  },
  toolbar:{
    display:'flex',
    flexWrap:'wrap',
    position:'relative',
    marginTop:'68px',
    backgroundColor:'grey'
  }
}))

function getProfileData(companyDetails){
  return{}
}


function Dashboard(props) {
  
  const classes = useStyles()
  const companyLoginDetails = {};
  const [data, setData] = React.useState(getProfileData(companyLoginDetails))


  return (
      <div style={{display:'flex', backgroundColor:'#bcbbbb !important', flexDirection:'row', alignItems:'stretch', width:'100%'}}>
        <div>
          <DashboardNavBar activeTab='Profile'/>
        </div>
        <div style={{display:'flex', flexDirection:'column', alignItems:'stretch', width:'100%', position:'relative', top:'68px',}}>
          <div style={{display:'flex', width:'100%', fontSize:'30px', justifyContent:'center', color:'#FFFFFF', backgroundColor:'green'}}>profile</div>
          <Profile/>
          </div>
      </div>
  )
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Dashboard;
