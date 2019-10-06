import React, { Fragment } from 'react';
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
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Divider from '@material-ui/core/Divider'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import WithWidth from '@material-ui/core/withWidth'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import withWidth from '@material-ui/core/withWidth';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flex:'1px',
      alignItems:'stretch',
      flexDirection:'column',
      justifyContent:'space-between',
    },
    formContainer:{
      display: 'flex',
      flexDirection:'row',
      alignItems:'stretch',
      flexGrow:'1',
      flexWrap:'wrap',
      width:'100%',
      // marginRight:'10px',
      // marginTop:'20px',
      justifyContent:'space-between',
    },
    formControl: {
      margin: theme.spacing(1),
    },
  }));

function AddDutyTextField(props){
  // console.log(props.duties.indexOf(props.duty))
  const [duty, setDuty] = React.useState(props.duty)
  const handleDutyChange = (event) =>{
    setDuty(event.target.value)
  }
  console.log(props.duties)
return (
  <Grid item xs={12}>
  <TextField fullWidth={true} id={'job-duties-'+ props.duties.indexOf(props.duty)} variant={'standard'} label={props.label} onChange={handleDutyChange}/>
  </Grid>
)
}

function PickDate(props){
  const formData = props.formData
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label={props.value}
          value={props.selectedDate}
          onChange={props.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        </MuiPickersUtilsProvider>
  )
}


function TextInputField(props){


  return (
    <Grid item xs={props.xs} sm={props.sm}>
          <TextField disabled={true} fullWidth={true} id={props.email} variant={'outlined'} label={`${props.label}`} value={props.formData[`${props.email}`]} />
        </Grid>
  )
}

function FormContent(props) {

  // const [labelWidth, setLabelWidth] = React.useState(0);
  const contactTypes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
//   const labelRef = React.useRef(null);
//   // const formData = props.formData
//   const [formDataa, setFormData] = React.useState({
//     orgName:'Organization name',
//     job:'Telecommunication',
//     email:'emailsample1@gmail.com',
//     otherEmail:'emailsample2@gmail.com',
//     phoneNumber:'+232-76-564232',
//     otherPhoneNumber:'+232-78-234412',
//     address:'39 D Sankoya Lane, Madingo Town',
//     area:'Central One',
//     city:'Freetown',
//     webSite:'www.organisation.com',
//     linkedIn:'organisation.linkedin.com',
//     jobDuties:['']
// });
// const [dutiess, setDuties] = React.useState([{[`duty-${1}`]:''}])

// const addNewField1 = (event) =>{
//   // console.log(event.target.id)
//   // console.log('This text is click')
//   setDuties([...duties, {[`duty-${duties.length}`]:''}])
  
//   console.log(duties)
// }
// const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

//   const handleDateChange1 = date => {
//     setSelectedDate(date);
//   }

// const classes = useStyles();

//   const handleChange1 = prop => event => {
//     console.log(props, '       ===   ',  event.target.value)
//     setFormData({ ...formData, [prop]: event.target.value });
//   }

//   const handleDutyChange1 = prop => event =>{
//     // console.log(prop)
//     const roles = []
//     // duties.map(duty=>{
//     //   if(duties.indexOf(duty) == prop){
//     //     // duty = duties[prop][`duty-${prop+1}`]:event.target.value
//     //     Object.keys(duty)[0] = event.target.value
//     //   }
//     //   roles.push(duty)
//     // })
//     // roles[prop][`duty-${prop+1}`] = event.target.value
//     // console.log(roles)
//     duties[prop][`duty-${prop+1}`] = event.target.value

//     setDuties([...duties])

//     // setDuties([...duties, duties[prop][`duty-${prop+1}`] = event.target.value])
//     // setDuties(duties=>roles)
//   }

  const formData = props.formData
  const duties = formData.jobDuties
  console.log(duties)
  const{handleChange, addNewField, handleDateChange, handleDutyChange} = props

  const Selectfield = props => {
    return  (
    <TextField fullWidth={true} id={formData.contactType} select label={props.label} onChange={props.handleJobDutiesChange}
        SelectProps={{
          native: true,
        }}
        variant={props.outlined === undefined? 'outlined': 'standard'}
      >
        {props.options.map(opt => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </TextField>
  )}

  return (
    <div style={{flexGrow:'1'}}>
    <Grid container spacing={4}>
    <Hidden smUp>
          <Grid item xs={12} sm={2} style={{display:'inline' ,float:'right'}}>
          <HomeIcon style={{width:'90px', height:'140px'}}/>
        </Grid>
      </Hidden>
      <Grid item xs={12} direction={'row-reverse'} sm={9}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField disabled fullWidth={true} id={formData.orgName} variant={'outlined'} label={'orgName'} value={formData['orgName']} onChange={handleChange('orgName')} />
        </Grid>
        <Grid item xs={12}>
          <TextField disabled fullWidth={true} id={formData.job} variant={'outlined'} label={'Company Description'} value={formData['job']} onChange={handleChange('job')} />
        </Grid>
        </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} style={{display:'inline' ,float:'right'}}>
          <HomeIcon style={{width:'90px', height:'140px'}}/>
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.email} variant={'outlined'} label={'email'} value={formData['email']} onChange={handleChange('email')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.otherEmail} variant={'outlined'} label={'other Email'} value={formData['otherEmail']} onChange={handleChange('otherEmail')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.phoneNumber} variant={'outlined'} label={'Phone Number'} value={formData['phoneNumber']} onChange={handleChange('phoneNumber')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.otherPhoneNumber} variant={'outlined'} label={'Other Phone Number'} value={formData['otherPhoneNumber']} onChange={handleChange('otherPhoneNumber')} />
        </Grid>
        <Grid item xs={12}>
          <TextField disabled fullWidth={true} id={formData.address} variant={'outlined'} label={'Address'} value={formData['address']} onChange={handleChange('address')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.area} variant={'outlined'} label={'Area'} value={formData['area']} onChange={handleChange('area')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.city} variant={'outlined'} label={'City'} value={formData['city']} onChange={handleChange('city')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.webSite} variant={'outlined'} label={'Web Site'} value={formData['webSite']} onChange={handleChange('webSite')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.linkedIn} variant={'outlined'} label={'LinkedIn'} value={formData['linkedIn']} onChange={handleChange('linkedIn')} />
        </Grid>
        <Divider style={{color:'#000', height:'3px', width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Job Title'} onChange={handleChange('jobTitle')} />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <Selectfield label={'Contact Type'} options={contactTypes} fieldName={'contactType'} handleChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
        <fieldset>
            <legend>Contract Duration</legend>
            <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
            <Selectfield label={'contract period'} options={['','10', '20', '30', '40', '50', '60', '70', '80']} fieldName={'contractDuration'} />
            </Grid>
            <Grid item xs={6} sm={6}>
            <Selectfield label={'contract period'} options={['','weeks', 'months', 'years']} fieldName={'contractDuration'} />
            </Grid>
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Starting Date'} onChange={handleChange('startingDate')} /> */}
          <PickDate value={'Starting Date'} selectedDate={new Date('2014-08-18T21:11:54')} handleChange={handleDateChange} formData={formData} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <fieldset>
            <legend>Salary Range</legend>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Selectfield outlined={'none'} options={['','SL', '$', '#']} label={'currency'} fieldName={'currency'} handleChange={handleChange} />
              </Grid>
              <Grid item xs={6} sm={6}>
                <Input
                  // className={classes.input}
                  // value={value}
                  label='amount'
                  // margin="dense"
                  onChange={handleChange}
                  // onBlur={handleBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 1000000000000,
                    type: 'number',
                    // 'aria-labelledby': 'input-slider',
                  }}
                />
              </Grid>
            </Grid>
          </fieldset>
          {/* <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Salary Range'} onChange={handleChange('salaryRange')} /> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Quilification'} onChange={handleChange('quilification')} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <PickDate value={'Advert Closing Date'} selectedDate={new Date('2014-08-18T21:11:54')} handleChange={handleDateChange} formData={formData} />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize style={{minWidth:'98%', paddngRight:'3px',}} rows={3} label={'Job Description'} placeholder={'Job Description'}  onChange={handleChange('jobDescription')}/>
        </Grid>
        <Grid item xs={12}>
          <fieldset>
            <legend>Job Duties</legend>
            <Grid container spacing={1}>
            {duties.map((duty) => (
              <AddDutyTextField duties={duties} label={`duties - ${duties.indexOf(duty)+1}`} handleDutyChange={handleDutyChange(duties.indexOf(duty))}/>            
              ))}
            <Button style={{backgroundColor:'teal'}} onClick={addNewField}><PlusOneIcon /></Button>
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize style={{minWidth:'98%', paddingRight:'3px',}} rows={3} label={'Other Information'} placeholder={'Other Information'}  onChange={handleChange('otherInformation')}/>
        </Grid>
    </Grid>
    </div> 
  )
  }

FormContent.propTypes = {
  // formData:PropTypes.object.isRequired
  width: PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
  formData:PropTypes.object.isRequired,
  fullScreen:PropTypes.string.isRequired,
}

export default withWidth()(FormContent)