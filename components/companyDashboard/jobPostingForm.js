import React from 'react';
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FilledInput from '@material-ui/core/FilledInput';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import CloseIcon from '@material-ui/icons/Close';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormContent from './formContent'
// import CloseIcon from '@material-ui/icons/CloseIcon'
import TempFrom from './tempForm'
import { Divider } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
    },
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
  }));

export default function JobPostingForm(props) {
const classes = useStyles()
  const [formData, setFormData] = React.useState({
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
});

  // const handleChange = prop => event => {
  //   console.log(props, '       ===   ',  event.target.value)
  //   setFormData({ ...formData, [prop]: event.target.value });
  // }

  // const [labelWidth, setLabelWidth] = React.useState(0);
  
  
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="job posting form"
      >
        <div style={{display:'flex', justifyContent:'space-between'}}><DialogTitle id="job posting form">Job posting form</DialogTitle>
       <Button onClick={props.handleClose}>
       <CloseIcon/>
       </Button>
       </div>
        <DialogContent>
            <FormContent formData={props.formData} addNewField={props.addNewField} handleDutyChange={props.handleDutyChange} handleChange={props.handleChange}/>
            {/* <TempFrom /> */}
        </DialogContent>
        <Divider />
        <DialogActions style={{display:'flex', justifyContent:'space-between'}}>
          <div><Button onClick={props.handleClose} className={classes.button} >Preview</Button></div>
          <div><Button onClick={props.handleClose} className={classes.button}>Post</Button></div>
        </DialogActions>
      </Dialog>
    </div>
  );
} 

JobPostingForm.propTypes = {
    fullScreen:PropTypes.string,
    formData:PropTypes.object.isRequired,
    open:PropTypes.boolean,
  }