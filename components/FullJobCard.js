import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JobHolder from './JobHolder';
import JobDescription from './JobDescription';

import Grid from '@material-ui/core/Grid';
 
import useMediaQuery from '@material-ui/core/useMediaQuery';
 
const useStyles = makeStyles(() => ({
  root: {
     
    
marginLeft:'-70em',
   padding:'0',
    flexWrap:'nowrap',
    marginTop:'-10em',
 
    
   
     
  },
  item1:{
  display:'flex',
  padding:'0px',
 marginTop:'9.5em',
  flexDirection:'column',
  alignSelf: 'flex-end',
  marginLeft:'10em'
  },
  item2:{
    display:'flex',
   height:'650px',
    backgroundColor:'white',
position:'fixed',
  marginLeft:'20em',
 
   boxSizing:'border-box',
   marginTop:'.6em',  
   border:'.2em  solid yellow .3',
   borderRadius:'.4em',
      flexWrap:'nowrap',
      
    },
    item2hide:{
      display:'none'
    }
  
}));

 

export default function FullJobCard({arr,ShowerSign,desription}) {
 
  const classes = useStyles();
  




 
  
  /* Medium devices (landscape tablets, 768px and up) */
   const md = useMediaQuery('(min-width: 768px)');
  
 
    



  

  return (
    <div>
           
      <Grid container  className={classes.root} spacing={1}>
        <Grid item className={classes.item1} >
        {arr.map((obj,index)=>{
          return(
    <JobHolder   
    jobTitle={obj.jobTitle}
    companyName={obj.companyName}
    jobDescription={obj.JobDescription}
    contactDuration={obj.contactDuration} 
    startingDate={obj.startingDate}
    salaryRange={obj.salaryRange}
    jobDutyAndRresponsibility={obj.jobDutyAndRresponsibility}
    requireQualification={obj.requireQualification}
    additionalInformation={obj.additionalInformation}
     closingDate={obj.closingDate}
     Location={obj.Location}
     shower={obj.shower}
     ShowerSign={ShowerSign}
    indexes={index}
   
  key={index}/> 
    
          )
        
        })
       
        }
          
          

          
          
        </Grid>
        <Grid item className={( md)? classes.item2:classes.item2hide} >
          
    <JobDescription desription={desription} />  
        </Grid>
      </Grid>
       
     
    </div>
  )}; 
