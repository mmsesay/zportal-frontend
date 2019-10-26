import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import Close from '@material-ui/icons/Close'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { red,yellow,blue } from '@material-ui/core/colors';
import JobDescription from '../JobDescription'
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import LocationOn from '@material-ui/icons/LocationOn';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Work from '@material-ui/icons/Work';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(() =>({
  typocolor:{
    color:'red'
  },
  closeIcon:{
    '&:hover':{
      cursor:'pointer',
    }
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function JobPreview(props){
    const classes = useStyles()
    const data = props.data
console.log(data)
      const description=[{['Job Title']:data.jobTitle} ,   
      {['Company Name']:data.orgName} ,
      {['Contract Duration']:data.contractDuration},        
      {['Company Description']:data.companyDescription},          
      {['Starting Date']:data.startingDate},
      {['Closing Date']:data.closingDate},
      {['Salary From']:data.minimum}, 
      {['Salary To']:data.maximum}, 
      {['Job duties and responsibility']:data.jobDuties},
      {['Required Qualification']:data.qualification} ,    
      {['Additional Information']:data.otherInformation},    
      {['Email']:data.email},  
      {['Location']:data.address+' '+data.area+' '+data.city}]
      const views = data.views || 0

    const previewContent = (
        description.map(obj => (
          <List>
            <ListItem>
          <ListItemText primary={Object.keys(obj)[0] + ':\t\t' + obj[Object.keys(obj)[0]]?obj[Object.keys(obj)[0]]:'not available' }/>
        </ListItem>
          </List>
        ))
      )

    return (
        <Dialog
        open={props.open }
        TransitionComponent={Transition}
        keepMounted
        fullWidth = {true}
        maxWidth = 'md'
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        onClose={props.handlePreview}
      >
        <DialogTitle style={{display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div style={{fontSize:'30px',}}>{data.jobTitle}</div>
            <div ><Close className={classes.closeIcon} onClick={props.handlePreview} /></div>
          </div>
          <div>{data.orgName}</div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div><LocationOn className={classes.typocolor}/>{data.city}</div>
            <div><Work className={classes.typocolor}/>Number of applicants:  {views}</div>
            <div><PermIdentity className={classes.typocolor}/>contract duration</div>
          </div>
          <Divider style={{width:'100%', color:'black', height:'3px'}}/>
        </DialogTitle>
      
        <DialogContent>        
          {previewContent} 
        </DialogContent>
      </Dialog>  
    )
}