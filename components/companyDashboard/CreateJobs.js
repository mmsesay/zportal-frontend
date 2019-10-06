import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Button, Grow } from '@material-ui/core';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import InputLabel from '@material-ui/core/InputLabel';
import Hidden from '@material-ui/core/Hidden'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Dialog from '@material-ui/core/Dialog'
import { useTheme } from '@material-ui/core/styles';
import JobPostingForm from './jobPostingForm'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { withStyles } from '@material-ui/styles';




const styles = theme => ({
 button:{
  fontSize:'20px',
  borderRadius: '5px',
  textTransform:'none',
  color: '#ffffff',
    backgroundColor: '#1e5b49',
    '&:hover':{
      color: '#ffffff',
      backgroundColor: '#1e5b49',
    }
 },
 activeBtn:{
  backgroundColor: '#AA2223',
  fontSize:'20px',
  borderRadius: '5px',
  textTransform:'none',
  color: '#ffffff',
  '&:hover':{
    color: '#ffffff',
    backgroundColor: '#1e5b49',
  }
 }
});

// const theme = useTheme();
// // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
// const classes  = useStyles();

class CreateJobs extends React.Component {

  constructor(props){
    super(props)

    this.state={
        data:{
          jobs:['System Adminstrator', 'Call Center Registration', 'Shop Attendance', 'Back Teller', 'Junior Developer', 'Project co-ordinator', 'Public Relation Officer', 'Fleet Manager', 'Financial Assistant', 'Store Keeper', 'Legal Experts'],
          formData:{
              orgName:'Organization name',
              job:'Telecommunication',
              email:'emailsample1@gmail.com',
              otherEmail:'emailsample2@gmail.com',
              phoneNumber:'+232-76-564232',
              otherPhoneNumber:'+232-78-234412',
              address:'39 D Sankoya Lane, Madingo Town',
              area:'Central One',
              city:'Freetown',
              webSite:'www.organisation.com',
              linkedIn:'organisation.linkedin.com',
              jobDuties:['']
          },
          jobFilter:'',
        },
        userInteraction:{
          open:false,
          activeButton:false,

        }
    }

    this.handleActiveButton = this.handleActiveButton.bind(this)
    this.handleClickOpen = this.handleClickOpen.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleFormValueChange = this.handleFormValueChange.bind(this)
    this.addNewField = this.addNewField.bind(this)
    this.handleDutyChange = this.handleDutyChange.bind(this)

  }

  addNewField = event =>{
    this.setState({...this.state.data.formData.jobDuties.push({[`duties-${this.state.data.formData.jobDuties.length}`]:''})})
  }

  handleDutyChange = index => event =>{
    this.setState({...this.state.data.formData.jobDuties[index][`duty-${prop+1}`]=event.target.value})
  }
 
  handleActiveButton(){
      this.setState({...this.state.userInteraction.activeButton=!this.state.userInteraction.activeButton})
  }
  
  handleChange(event){
    this.setState({...this.state.data.jobFilter=event.target.value})
  }
  handleFormValueChange =name => event =>{
    this.setState({...this.state, [name]:event.target.value})
  }

  handleClickOpen (){
    // console.log(this.state.userInteraction.open)
    
    this.setState({...this.state.userInteraction.open=true});
    console.log(this.state)
  };

  handleClose (){
    this.setState({...this.state.userInteraction.open=false});
    // setActiveButton(false)
  };
  
  render() {
    // const theme = useTheme();
    const {classes} = this.props
    const filterField = ( 
      <div style={{alignSelf:'flex-end', marginTop:'8px', marginRight:'5px'}}>
        <FormControl variant="filled" style={{width:'100px'}}>
          <InputLabel htmlFor="filter-jobs">Filter by</InputLabel>
          <Select
            // value={value}
            onChange={this.handleChange}
            inputProps={{
              name: 'age',
              id: 'filter-jobs',
            }}
          >
            <MenuItem value={'recent'}>recent</MenuItem>
            <MenuItem value={'most view'}>mostly view</MenuItem>
            <MenuItem value={'letters'}>letters</MenuItem>
          </Select>
        </FormControl>
      </div>
    )
    const jobList =  (
      <div style={{overflowY:'auto'}}>
          <List>
          { this.state.data.jobs.map(job => (
          <ListItem button>
            <ListItemText primary={job} />
          </ListItem>
          ))}
        </List>
      </div>
    )
    const popUpDialog =  (
      <div>
        <Dialog
          open={this.state.userInteraction.activeButton}
          onClose={this.handleActiveButton}
          aria-labelledby="job posting form"
        >
          {filterField}
          {jobList}
        </Dialog>
      </div>
    )
  return (
    // <div style={{display:'flex', flexDirection:'column', alignItems:'stretch', width:'100%', height:'100%', position:'relative'}}>
    <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-around', height:'921px'}}>
    <div style={{display:'flex', justifyContent:'space-around'}}>
    {this.state.userInteraction.activeButton?<Hidden smDown>
    <Grow
      in={this.state.userInteraction.activeButton}
      style={{transformOrigin:'0 0 0', marginRight:'20px'}}
      {...(this.state.userInteraction.activeButton? {timeout:1000}:{})} >
        <div style={{height:'400px', backgroundColor:'#fff', display:'flex', flexDirection:'column'}}>
              {filterField}
              {jobList}
        </div>
      </Grow>
    </Hidden>:null}
    <Hidden mdUp>
      {popUpDialog}
    </Hidden>
      {/* <div style={{width:'300px'}}> */}
      <Paper style={{height:'150px', width:'300px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
        <div div style={{textAlign:'center', fontSize:'40px'}}>
          Create
        </div>
        <div style={{display:'flex', justifyContent:'space-around', marginBottom:'8px'}}>
            <Button onClick={this.handleActiveButton} className={this.state.userInteraction.activeButton?classes.activeBtn:classes.button}>From Existing</Button>
            <Button className={classes.button} onClick={this.handleClickOpen}>New</Button>
            <JobPostingForm handleDutyChange={this.handleDutyChange} addNewField={this.addNewField} handleChange={this.handleFormValueChange} formData={this.state.data.formData} open={this.state.userInteraction.open} handleClose={this.handleClose}/> 
        </div>
      </Paper>
      </div>
      </div>
  );}
}

export default withStyles(styles) (CreateJobs)