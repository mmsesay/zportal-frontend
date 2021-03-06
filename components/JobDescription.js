import React,{useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LocationOn from '@material-ui/icons/LocationOn';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red,green } from '@material-ui/core/colors';


import PermIdentity from '@material-ui/icons/PermIdentity';
import Work from '@material-ui/icons/Work';


const useStylesDescription = makeStyles(theme => ({
  descCardm: {
  
   display:'flex',
   flexDirection:'column',
   boxShadow:'0px 0px',
   backgroundColor:'white',
  
  
  },
  
  lists:{
    overflowY: 'scroll',
    maxHeight:'auto',
    
  },
  headerm:{
    marginTop:'-4em'
  }
  
  ,
 
  CardContent:{
   
    display:'flex',
     marginTop:'-3em',
    alignItems:'center',
    justifyContent:'space-between'
        
         },
         CardContentCity:{
display:'flex'
         },
         applicants:{
            display:'flex'
         }
,
         Divider:{
marginTop:'-2em'
         },
         
         typo:{
           color:red[500]
         },
 
  CardActionsm:{
      marginLeft:'39em',
      
     marginTop:'0px'
      
  },
  CardActionsmHide:{
    display:'none'    
},


  red:{
      background:red[400]
  },
  green:{
    background:green[400]
},
  FullTime:{
    display:'flex'
      
  },
 
   
  typocolor:{
      color:'red'
  },
  avatar: {
    backgroundColor: red[500],
     
  },
}));

export default function companyDescription({desription}) {
  const classes = useStylesDescription();
//  console.log(desription)
  const md = useMediaQuery('(min-width: 768px)');

  return (
    
    <Card  className={classes.descCardm}>
       
       <CardActions className={  !md?classes.CardActionsmHide: classes.CardActionsm}>
          <Button className={classes.red} variant="contained" size="small">Apply</Button>
          <Button className={classes.green} variant="contained" size="small">share</Button>
        </CardActions>
 
      <CardHeader 
        className={classes.headerm}    
        title={ desription.jobTitle}
        subheader={ desription.companyName || ''}
      />
    
      {/* here is the city date and deadline */}
  

      <CardContent className={classes.CardContent}>

      <CardContent className={classes.CardContentCity}>
        <LocationOn className={classes.typocolor} /> 
        <Typography variant="body2"  component="p">
          {desription.Location}
        </Typography>
      </CardContent>

      <CardContent className={classes.applicants} component="div">
         <PermIdentity className={classes.typocolor}/>
         <Typography  variant="body2"  component="p">
          {Math.round(Math.random()*100)} Applicant have applied for this job
        </Typography>
      </CardContent>

        <CardContent className={classes.FullTime} component="div">
          <Typography  variant="body1" color="textSecondary" component="p">
            {desription.contractDuration}
          </Typography> 
          <Work className={classes.typocolor}/>
        </CardContent>
    </CardContent>

      <Divider className={classes.Divider}/>

      <List className={!md?classes.root:classes.lists}>

        <ListItem>
          <ListItemText primary='Company Background'
            secondary={desription.companyDescription}/>
        </ListItem>
        <ListItem>
          <ListItemText primary='Contract Duration'
            secondary={desription.contractDuration}/>
        </ListItem>
        <ListItem>
          <ListItemText primary='Starting Date'
            secondary={ desription.pubDate}/>
        </ListItem>
        <ListItem>
          <ListItemText primary='Salary Range' 
            secondary={`From: ${desription.salary} To: ${desription.salary}` }/>
        </ListItem>
        <ListItem>
            <ListItemText primary='Job duties and responsibilities' 
              secondary={desription.jobDutyAndRresponsibility}/>
        </ListItem>
        <ListItem>
          <ListItemText primary='Require Qualification' 
              secondary={desription.requireQualification}/>
        </ListItem>
        <ListItem>
          <ListItemText primary='Additional Information' 
              secondary={desription.additionalInformation}/>
        </ListItem>
        <ListItem>
          <ListItemText primary='email address to use to apply' 
              secondary={desription.email}/>
        </ListItem>
      </List>
     
    </Card>
  );
}