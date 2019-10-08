import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover'
import {FaUser, FaEye, FaCaretDown} from 'react-icons/fa'
import { Divider, FormGroup, FormControlLabel, Switch } from '@material-ui/core';
import JobsViews from './jobsViews'

const useStyles = makeStyles({
  card: {
    flexShrink:1,
    minWidth: 450,
    borderRadius:'25px',
  },
  cardContent:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  cardText:{
      display:'flex',
      justifyContent:'space-between',
      alignContent:'flex-end',
  },
  cardBadge:{
      alignSelf:'flex-end',
  },
  disableCard:{
    backgroundColor:'black',
    opacity:'0.07',
    // boxShadow:'3px 3px #000',
    width: 450,
    borderRadius:'25px',
    pointerEvents:'none',
  }
});

function CardDetails (props){
  const [job, setJobDetail] = React.useState({...props.job})
  const [viewList, setViewList] = React.useState(null)
  const open = Boolean(viewList)
  const id = open? 'simple-popover' : undefined
  const classes = useStyles()
  
  const handleDeactivate =  (event) =>{
    setJobDetail({...job, isJobDisable:!job.isJobDisable})
  }

  const toggleJobsViewList = (event) =>{
    setViewList(event.currentTarget)
    console.log('view list is    :', viewList)
  }

  const handleClose = () =>{
    setViewList(null)
  }

  const viewsListPopup = (
    <div style={{position:'relative'}}>
      <Popover
        id={id}
        open={open}
        anchorEl={viewList}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <JobsViews />
      </Popover>
    </div>
  )

  return (
    <Fragment>
    <div style={{ display:'flex', flexDirection:'row', position:'relative', top:'78', flexWrap:'wrap', alignItems:'center', justifyContent:'space-between',  marginBottom:'1px'}} >
      
        <Card className={job.isJobDisable?classes.disableCard:classes.card} >
        <CardContent className={classes.cardContent}>
          <div className={classes.cardText}>
              <Typography> {job.jobTitle} </Typography>
              <div><FaEye style={{color:'#F76047'}}/> {job.views} </div>
               <div><Button aria-describedby={job.jobTitle} style={{backgroundColor:'#AA2223', color:'white', border:'2px bold', padding:'5px'}} variant="contained" onClick={toggleJobsViewList}>
                <FaUser style={{color:'#FFFFFF'}} /> {job.applicants}
                </Button>
              </div>
          </div>
          <div className={classes.cardText} style={{marginTop:'50px', paddingBotton:'0x', color:'#AA2223'}}>
              <Typography>Date of Publish</Typography>
              <Typography>Closing Date</Typography>
          </div>
          <div className={classes.cardText}>
              <Typography> {job.dateOfPublish} </Typography>
             <Button  style={{marginBottom:'-20px',}}> <FaCaretDown /></Button>
              <Typography> {job.closingDate} </Typography>
          </div>
        </CardContent>
      </Card>
      {/* </div> */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', }} >
          <div>disable</div>
          <div>
          <FormGroup>
            <FormControlLabel
            control={ 
              <Switch
                checked={job.isDisable}
                onChange={handleDeactivate}
                value='isJobDisable'
                style={{color:'green', backgroundColor:'light-green'}}
              />
            }
          />
          </FormGroup></div>
          <div>disable</div>
      </div>
    </div>
  <Divider style={{backgroundColor:'#000', display:'flex', alignItems:'space-around', marginBottom:'6px', height:'2px', marginLeft:'20px'}}/>
  {viewsListPopup}
  </Fragment>
  )
}

export default function EmployerJobCard() {

  const [state, setData] = React.useState([{ 
          jobTitle:'IT Technician',
          views:19,
          applicants:13,
          dateOfPublish: '1/11/2019',
          closingDate:'23/12/2019',
          isJobDisable:false

        },{
        jobTitle:'IT Technician',
        views:19,
        applicants:13,
        dateOfPublish: '1/11/2019',
        closingDate:'23/12/2019',
        isJobDisable:false
        
    },{
        jobTitle:'IT Technician',
        views:19,
        applicants:13,
        dateOfPublish: '1/11/2019',
        closingDate:'23/12/2019',
        isJobDisable:false
        
    },{
        jobTitle:'IT Technician',
        views:34,
        applicants:13,
        dateOfPublish: '1/11/2019',
        closingDate:'23/12/2019',
        isJobDisable:false
        
    },{
        jobTitle:'IT Technician',
        views:76,
        applicants:13,
        dateOfPublish: '1/11/2019',
        closingDate:'23/12/2019',
        isJobDisable:false
        
    },{
        jobTitle:'IT Technician',
        views:19,
        applicants:13,
        dateOfPublish: '1/11/2019',
        closingDate:'23/12/2019',
        isJobDisable:false
    },
    ])

  return (
    <Fragment  >
       {state.map(job => (
          <CardDetails job={job} />
      )) }
      </Fragment>
  )
}
