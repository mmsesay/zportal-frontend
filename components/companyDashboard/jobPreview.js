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
import LabelIcon from '@material-ui/icons/Label';
import ListItemIcon from '@material-ui/core/ListItemIcon'

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
    display:'flex',
    alignItems: 'center',
    paddingLeft:'20px',
    borderRadius:'5px',
    marginTop:'20px',
    height:'auto',
    backgroundColor:'lightgray'
  },
  fieldValue:{
    width:'auto',
    fontWeight:'bold'
  }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function JobPreview(props){
    const classes = useStyles()
    console.log(props.FormData)
    let {jobTitle, jobDuties, companyDescription, jobDescription, contractValue, contractUnit, qualification, orgName, salaryRange, minimumSalary, maximumSalary, contractType, contractDuration, startingDate, closingDate, otherInformation, email, address, city, webSite} = props.FormData
    salaryRange = Boolean(minimumSalary) && Boolean(maximumSalary)? `From: ${minimumSalary}    To: ${maximumSalary}`: undefined
    contractDuration = (Boolean(contractValue) && Boolean(contractUnit)) ? `${contractValue}    ${contractUnit}`:Boolean(contractDuration)?contractDuration:undefined

    const views = props.FormData.views || 0


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
              <div style={{fontSize:'30px',}}>{orgName}</div>
              <div ><Close className={classes.closeIcon} onClick={props.handlePreview} /></div>
            </Grid> 
            <Grid item xs={12}>{jobTitle}</Grid>
            <Grid item xs={12} sm={4}><LocationOn className={classes.typocolor}/>{city}</Grid>
            <Grid item xs={12} sm={4}><Work className={classes.typocolor}/>Number of applicants:  {views}</Grid>
            <Grid item xs={12} sm={4}><PermIdentity className={classes.typocolor}/>contract duration</Grid>
            <Grid item xs={12}><Divider style={{width:'100%', color:'black', height:'3px'}}/></Grid>
          </Grid>
        </DialogTitle>
      
        <DialogContent>        
          <Grid container spacing={2}>
         {companyDescription && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Company Description:</span> {companyDescription}</div></Grid>}
         {contractType && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Contract Type:</span> {contractType}</div></Grid>}
         {Boolean(contractDuration) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Comtract Duration:</span> {contractDuration}</div></Grid>}
         {Boolean(startingDate) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Starting Date:</span> {startingDate.toJSON().split('T')[0]}</div></Grid>}
         {Boolean(salaryRange) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Salary Range:</span>.salaryRange</div></Grid>}
         {Boolean(jobDescription) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Job Description:</span> {jobDescription}</div></Grid>}
         {Boolean(qualification) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Required Qualification:</span> {qualification}</div></Grid>}
         {jobDuties.length > 0 && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Job Duties and Responsibilities:</span> <List>
            {jobDuties.map(duty => (<Grid key={`duty${jobDuties.indexOf(duty)}`} item xs={12}>
              <ListItem style={{marginLeft:'20px',}}><ListItemIcon><LabelIcon /></ListItemIcon><ListItemText style={{marginLeft:'-12px',}}>{duty}</ListItemText></ListItem>
            </Grid>))}
            </List></div>
            </Grid>}
         {Boolean(email) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Email:</span> {email}</div></Grid>}
         {Boolean(closingDate) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Closing Date:</span> {closingDate.toJSON().split('T')[0]}</div></Grid>}
         {Boolean(otherInformation) && <Grid item sm={12} className={classes.textBackground}  ><div ><span className={classes.fieldValue}>Addtional information:</span> {otherInformation}</div></Grid>}  
        </Grid>
        </DialogContent>
      </Dialog>  
    )
}