import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import CreateJobs from '../components/companyDashboard/CreateJobs'
// import {CreateCard, LoginTrigger} from '../components/createCard'
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


function Dashboard(props) {
  
  const classes = useStyles()

  return (
    <body style={{background:'#bcbbbb',}}>
      <div style={{display:'flex', flexDirection:'row', alignItems:'stretch', width:'100%'}}>
        <div>
          <DashboardNavBar activeTab='Jobs'/>
        </div>
        <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column', width:'100%', position:'relative', top:'88px',}}>
            <div style={{display:'flex', width:'100%', fontSize:'30px', justifyContent:'center', color:'#FFFFFF', backgroundColor:'green'}}>Jobs</div>

                <CreateJobs formData={[]}/>
                {/* <CreateCard /> */}
          </div>
      </div>
    </body>
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
