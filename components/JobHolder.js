import React, {Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import Button from '@material-ui/core/Button';

// import useStyles  from './jobcardStyles';
 
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import LocationOn from '@material-ui/icons/LocationOn';
import CardActionArea from '@material-ui/core/CardActionArea';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { red,yellow,blue } from '@material-ui/core/colors';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
  
import CardContent from '@material-ui/core/CardContent';

import JobDescription from './JobDescription';
 

import Avatar from '@material-ui/core/Avatar';
  
import Typography from '@material-ui/core/Typography';
import { borderLeft } from '@material-ui/system';
 

const useStyles = makeStyles(() => (
  {


// start for 550 xs

  cardxs: {
     padding:'0',
     height:'auto',
     width:'85%',
    maxWidth:'120%',
    // backgroundColor: red[100],
    marginTop:'0.3em',    
    display:'flex',
    marginLeft:'22em',
    // borderbo:'3px solid red',
    borderRight:'0px ',
    boxSizing:'birder-box',
    borderBottom: '.3em solid gray'
    
  },

  
  
  ArrowLeftHide:{
display:'none'
  }, 
   
    CardHeader:{
    // backgroundColor: red[200],
    padding:'0em', 
    marginTop:'-5em'
  },
  
  avatar: {
    backgroundColor: red[500],
    width:'3em',
    height:'3em',
    marginTop:'-1em',
    marginLeft:'.1em'
  },


  CardContent:{
   
display:'flex',
 marginTop:'-1em',
alignItems:'center',
justifyContent:'space-between'
    
     },
     typo:{
       color:red[500]
     },
     typos:{
      color:'gray'
    },

     typom:{
      color:red[500],
      fontSize:'1em'
    },
    typomblack:{
      fontSize:'1em',
      color:'gray'
    },
    //  done of xs
    

    // start for s 700
  cards: {
     
    // width:'212%',
    margin:'1em',
    marginLeft:'16em',
    width:'100%',
    maxwidth:'200%',
    // backgroundColor: red[100],
    
     height:'auto',
    borderBottom: '.3em solid gray',
    marginTop:'0.3em',    
    display:'flex',
     
    
    borderRight:'0px ',
    boxSizing:'birder-box',
    boxShadow: '0px 0px'
    
    
  },

  ArrowLeftShows:{
    display:'none'
    },
    CardHeaders:{
      // backgroundColor: red[200],
      padding:'0em', 
      marginTop:'-5.8em'
    },
  
    
    // end for s

    // start for m 900
    cardm: {
       
      marginLeft:'-70%',
      width:'120%',
    maxWidth:'120%',
    
     
    // backgroundColor: red[100],
      marginTop:'0.3em',    
      display:'flex',
     
      
      borderRight:'0px ',
      boxSizing:'birder-box',
      
    },

    cardmSelected: {
      marginLeft:'-70%',
      width:'120%',
    maxWidth:'120%',
    
     
    // backgroundColor: red[100],
      marginTop:'0.3em',    
      display:'flex',
     
      
      borderRight:'0px ',
      boxSizing:'birder-box',
      border: '2px solid gold',
      borderLeft:'5px solid gold'
      
    },
    avatarm: {
      backgroundColor: red[500],
      width:'1.8em',
      height:'1.8em',
      
      marginTop:'0.4em',
      marginLeft:'.1em'
    },
    avatars:{
      backgroundColor: red[500],
      width:'1.8em',
      height:'1.8em',
      
      marginTop:'0.4em',
      marginLeft:'.1em'
    },
    CardHeaderm:{
      // backgroundColor: red[200],
      padding:'0em',    
      marginTop:'-5.2em' ,
      
    },
   
    ArrowLeftShowm:{
       
    backgroundColor:'#0D1619',
    marginLeft:'97%',
       color:'#0D1619',
        
      transform:'rotate(45deg)',
       marginTop:'14%',
   
      
      },
  
    ArrowLeftHidem:{
      backgroundColor:'transparent',
      marginLeft:'97%',
      color:'transparent',
      
     transform:'rotate(45deg)',
      marginTop:'14%',
        },
        

red:{
  background:red[400],
  color:'white'
},
yellow:{
background:yellow[400],
color:'white'
},
blue:{
  background:blue[500],
color:'white'
}
        
      
}));

 
 
// the transition goes here
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobHolder({ indexes,shower,ShowerSign, jobTitle ,startingDate ,   
  companyName ,
  contractDuration  ,        
  companyDescription,         
  closingDate ,
  salaryFrom , 
  salaryTo ,   
  jobDutyAndRresponsibility ,
  requireQualification  ,    
  additionalInformation ,    
  email ,      
  location  
  } ) {

  const [open, setOpen] = React.useState(false);
 
  const classes = useStyles();
 
   
  
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

/* Extra small devices (phones, 600px and down) */
const xs = useMediaQuery('(max-width: 600px)');

/* Small devices (portrait tablets and large phones, 600px and up) */
const sm = useMediaQuery('(min-width: 600px)');

/* Medium devices (landscape tablets, 768px and up) */
 const md = useMediaQuery('(min-width: 768px)');

  return (
    
<Fragment>

    

    <Card  className={  

      
    
   md?  (md && shower==='show')? classes.cardmSelected:classes.cardm:  xs?classes.cardxs: sm? classes.cards:  
   classes.cardm 
 
    }
    // className={(md&&shower==='show')?classes.ArrowLeftShowm:classes.ArrowLeftHidem}
   
    onClick={  
      !md?handleClickOpen:handleClose
      }>
   
   
      <CardActionArea   onClick={()=>{
        //  className={shower==='show'?classes.cardxs:classes.cardaltxs}
         
        ShowerSign(indexes)
       
      }}>  
      < ArrowLeft  className={(md&&shower==='show')?classes.ArrowLeftShowm:classes.ArrowLeftHidem}/>
    {/*  className={classes.ArrowLeftHidem}*/}
      <CardHeader className={ md||sm?  md?classes.CardHeaderm:classes.CardHeaders :xs?classes.CardHeader:classes.cards }
        avatar={
          <Avatar aria-label="recipe" className={!md?xs?classes.avatar:sm?classes.avatars:classes.avatarm: classes.avatarm}>
           logo
          </Avatar>
        }
        title={`Job: ${jobTitle}`  }
        subheader={ companyName}
      />
      <CardContent className={classes.CardContent}>
   
        <Typography variant="body1" className={!md?classes.typos:classes.typomblack}
          color="textSecondary" component="p">
          <LocationOn className={!md?classes.typo:classes.typom} />
          {location}
        </Typography>
        <Typography className={!md?classes.typo:classes.typom}
          variant="body1" color="textSecondary" component="p">
          Publish Date
         <Typography className={!md?classes.typos:classes.typomblack}
          variant="body1" color="textSecondary" component="p">
         {/* {startingDate} */}{`${startingDate}`}
        </Typography>
        </Typography>

        <Typography className={!md?classes.typo:classes.typom} variant="body1" color="textSecondary" component="p">
       Closing Date
       <Typography className={!md?classes.typos:classes.typomblack} variant="body1" color="textSecondary" component="p">
       {closingDate}
        </Typography>
        </Typography>
      
       
      </CardContent>
      
      </CardActionArea>
           
    </Card>
    
  

  {/* the dialog goes here */}
         
  <Dialog
        open={open }
        TransitionComponent={Transition}
        keepMounted
      
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
      
        <DialogContent>        
          <JobDescription  desription={shower==='show'?{ jobTitle ,   
            companyName ,
            contractDuration  ,        
            companyDescription,          
            startingDate ,
            closingDate ,
            salaryFrom , 
            salaryTo ,   
            jobDutyAndRresponsibility ,
            requireQualification  ,    
            additionalInformation ,    
            email ,      
            location }:"nu ll"} />  
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={classes.yellow} color="primary">
            Apply
          </Button>
          <Button onClick={handleClose} className={classes.blue}  color="primary">
          { `Apply on ${companyName} website`}
          </Button>
          <Button onClick={handleClose} className={classes.red}  color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>  
    </Fragment>
  );
}