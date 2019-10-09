import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import JobHolder from './JobHolder';
import JobDescription from './JobDescription';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Divider, Button ,IconButton, StepConnector} from '@material-ui/core';
 
const useStyles = makeStyles(() => ({
  root: {
     
    
marginTop:'-100em',
   padding:'0',
    flexWrap:'nowrap',
    marginTop:'-10em',
    display:'flex'
     
  },
  selector:{
    marginLeft:'-16.8em',
    justifyContent:'center',
    alignItems:'center',
    width:'30em',
    color:'blue',
    marginTop:'1em',
    display:'flex',
    flexWrap:'nowrap'
     

   
  },

  navBottonRight:{
    maxWidth:'0em',
    backgroundColor:'blue',
    maxHeight:'.5em',
    fontSize:'.5em',
    alignContent:'center',
   
  },
  navBottonRightHide:{
    display:'none'
  },


  navBottonicon:{
    maxWidth:'1.2em',
     backgroundColor:'red',
    maxHeight:'1em',
    fontSize:'.8em',
    color:'white',
    alignContent:'center',
    margin:'.5px',
    marginLeft:'3px',
  
  },
  navBottoniconDisplay:{
   display:'none'
  
  },
  navBottoniconSelected:{
    maxWidth:'1.2em',
     backgroundColor:'white',
    maxHeight:'1em',
    fontSize:'.8em',
    color:'white',
    alignContent:'center',
    margin:'.5px',
    marginLeft:'3px',
  
  },

  item1:{
  display:'flex',
  padding:'0px',
marginTop:'10em',
  flexDirection:'column',
  alignSelf: 'flex-end',
  marginLeft:'-60em'
  },
  item2:{
    display:'flex',
 width:'49.8em',
 maxWidth:'49.8em',
    backgroundColor:'white',
    transition:'margin .3s linear 0s',
height:'32em',
 position:'fixed',
 
   boxSizing:'border-box',
   marginTop:'10.5em',
   border:'.2em  solid yellow .3',
   borderRadius:'.4em',
      flexWrap:'nowrap',
      marginLeft:'-50em',
    },
    item2hide:{
      display:'none'
    },
    item3:{
      display:'flex',
   width:'49.8em',
   maxWidth:'49.8em',
      backgroundColor:'white',
     transition:'margin .2s linear 0s',
 
   position:'fixed',
     boxSizing:'border-box',
     marginTop:'2em',
     border:'.2em  solid yellow .3',
     borderRadius:'.4em',
        flexWrap:'nowrap',
        marginLeft:'-50em',
        height:'40em',
      }
  
}));


export default function FullJobCard({
  number, displayerFunction,toBeDisplayControllerPlus,
  toBeDisplayControllerMinus,toBeDisplay, objs,ShowerSign,desription,objects}) {
 
  const classes = useStyles();
  
 
const [scrol, setScrol] = React.useState(classes.item2);
 

useEffect(()=>{

 window.addEventListener('scroll',function(e){
 
  if(scrollY>=110){
    setScrol(classes.item3)
  }else{
    setScrol(classes.item2)
  }
  
 })
   
   
},[])
 
paddingBlock:'1px'
  /* Medium devices (landscape tablets, 768px and up) */
  const md = useMediaQuery('(min-width: 768px)');
  return (
    <div>
           
      <Grid container  className={classes.root} spacing={1}>
        <Grid item className={classes.item1} >
        {  
          objs.map(obj=>{
            return(
              <JobHolder
                jobTitle ={obj.jobTitle}
                companyName ={obj.companyName}
                companyDescription ={obj.companyDescription}
                contactDuration ={obj.contactDuration} 
                startingDate  ={obj.pubDate}
                closingDate ={obj.closingDate}
                salaryFrom  ={obj.salary}
                salaryTo  ={obj.salary}
                jobDutyAndRresponsibility ={obj.jobDutyAndRresponsibility}
                requireQualification  ={obj.requiredQualification}
                additionalInformation ={obj.additionalinformation}
                email={obj.email}
                location ={obj.location}
                shower ={obj.shower}
                ShowerSign={ShowerSign}
                indexes={obj.id}
                key={obj.id}/>   
          
            )
          })
        }
          {/* here the button group */}
      <div className={classes.selector}> 
        <IconButton className={number>9? classes.navBottonRight:classes.navBottonRightHide} >
        <Badge onClick={()=>toBeDisplayControllerMinus()} className={classes.navBotton} badgeContent={`<<`} color="primary"/>
        </IconButton>
      
      {
        toBeDisplay.map((element,id) => {
          return(
        <IconButton  className={element===number? classes.navBottoniconSelected : 
        (objects-(9*element))>0 || (((9*element)-objects)>0 && ((9*element)-objects)<=10)? 
        classes.navBottonicon:classes.navBottoniconDisplay} key={id}>
      <Badge onClick={()=>
       {displayerFunction(element) }
       } className={classes.navBotton} badgeContent={element} color="primary"/>
      </IconButton>

          )
        }) 
      }
   
 
      <IconButton  className={number>9? classes.navBottonRight:classes.navBottonRightHide}  >
      <Badge onClick={()=>toBeDisplayControllerPlus()} className={classes.navBottonRight} badgeContent={`>>`} color="primary"/>
      </IconButton>
  
      </div>
        </Grid>
        <Grid item 
        // style={{marginTop:scrol  }}
         className={( md)? scrol:classes.item2hide} >
          
        <JobDescription desription={desription} />  
        </Grid>
        
      </Grid>
       
     
    </div>
  )}; 
