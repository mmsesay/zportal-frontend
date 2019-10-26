import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide';
import Close from '@material-ui/icons/Close'
import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import LocationOn from '@material-ui/icons/LocationOn';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Work from '@material-ui/icons/Work';
import { Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles(() =>({
  typocolor:{
    color:'red'
  },
  closeIcon:{
    '&:hover':{
      cursor:'pointer',
    }
  },
  textBackground:{
    borderRadius:'5px',
    backgroundColor:'lightgray'
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function JobPreview(props){
    const classes = useStyles()
    const data = props.data
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
          (Boolean(obj[Object.keys(obj)[0]]) && <Grid item xs={12} sm={6}>
            <ListItem className={classes.textBackground}>
          <ListItemText primary={Object.keys(obj)[0] + ':\t\t' + obj[Object.keys(obj)[0]]}/>
        </ListItem></Grid>)
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
        <DialogTitle>
          <Grid container>
            <Grid item xs={12} style={{display:'flex', justifyContent:'space-between'}}>
              <div style={{fontSize:'30px',}}>{data.jobTitle}</div>
              <div ><Close className={classes.closeIcon} onClick={props.handlePreview} /></div>
            </Grid> 
            <Grid item xs={12}>{data.orgName}</Grid>
            <Grid item xs={12} sm={4}><LocationOn className={classes.typocolor}/>{data.city}</Grid>
            <Grid item xs={12} sm={4}><Work className={classes.typocolor}/>Number of applicants:  {views}</Grid>
            <Grid item xs={12} sm={4}><PermIdentity className={classes.typocolor}/>contract duration</Grid>
            <Grid item xs={12}><Divider style={{width:'100%', color:'black', height:'3px'}}/></Grid>
          </Grid>
        </DialogTitle>
      
        <DialogContent>        
          <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}><List><Grid container spacing={1}>{previewContent}</Grid></List> </div>
        </DialogContent>
      </Dialog>  
    )
}