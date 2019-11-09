import React, { Fragment } from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import Divider from '@material-ui/core/Divider'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import Grid from '@material-ui/core/Grid'
import HomeIcon from '@material-ui/icons/Home'
import {withStyles, createMuiTheme} from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth';
import { Hidden, Radio, Popover } from '@material-ui/core'
import { green } from '@material-ui/core/colors'



function PickDate(props){
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
         autoOk = {true}
         variant="inline"
         inputVariant="outlined"
         label={props.label}
         format="MM/dd/yyyy"
         id="Date picker inline"
         value={props.formData[props.fieldName]}
         InputAdornmentProps={{ position: "start" }}
         onChange={props.handleDate(props.fieldName)}
         KeyboardButtonProps={{
           'aria-label': 'change date'
         }}
        // className = {feildRequired.includes(props.fieldName) && !Boolean(props.formData[props.fieldName])?props.classes.emptyRequiredFields:null}
        />
        </Grid>
        </MuiPickersUtilsProvider>
  )
}

const CusTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
  },
})(TextField);

const CusRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

const CusTextareaAutosize = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: 'lime',
      },
    },
  },
})(TextareaAutosize);

function Selectfield (props){
  const formData = props.formData
  const feildRequired = props.feildRequired
  return  (
  <CusTextField id={props.id} required={props.required} className = {feildRequired.includes(props.id) && !Boolean(formData[props.id])?props.classes.emptyRequiredFields:null} style={{marginTop:'0px', marginBottom:'0px', paddingTop:'0px',}} fullWidth={true}  value={props.value} select label={props.label} onChange={props.handleChange(props.fieldName)}
      SelectProps={{
        native: true,
      }}
      variant={props.outlined === undefined? 'outlined': 'standard'}>
      {props.options.map(opt => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </CusTextField>
)}

  function FormContent(props){
    const contactTypes = ['', 'Part Time', 'Fulltime', 'Permanent', 'Consultancy']
    const [selectedValue, setSelectedValue] = React.useState();
    var feildRequired = props.feildRequired || []
  // console.log(Boolean(props.formData.contractDuration['contractValue']))
    const handleRadioCheck = event => {
      setSelectedValue(event.target.value);
    };
  const formData = props.formData
  const duties = formData.jobDuties

  return (
    <div style={{flexGrow:'1'}}>
    <Grid container spacing={4}>
    <Hidden smUp>
          <Grid item xs={12} sm={2} style={{display:'inline' ,float:'right'}}>
          <HomeIcon style={{width:'90px', height:'140px'}}/>
        </Grid>
      </Hidden>
      <Grid item xs={12} sm={9}>
      <Grid container direction={'row-reverse'} spacing={4}>
        <Grid item xs={12}>
          <CusTextField disabled fullWidth={true} id={formData.orgName} variant={'outlined'} label={'orgName'} value={formData['orgName']} onChange={props.handleChange('orgName')} />
        </Grid>
        <Grid item xs={12}>
          <CusTextField disabled fullWidth={true} id={formData.job} variant={'outlined'} label={'Company Description'} value={formData['companyDescription']} onChange={props.handleChange('companyDescription')} />
        </Grid>
        </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} style={{display:'inline' ,float:'right'}}>
          <HomeIcon style={{width:'90px', height:'140px'}}/>
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.email} variant={'outlined'} label={'email'} value={formData['email']} onChange={props.handleChange('email')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.otherEmail} variant={'outlined'} label={'other Email'} value={formData['otherEmail']} onChange={props.handleChange('otherEmail')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.phoneNumber} variant={'outlined'} label={'Phone Number'} value={formData['phoneNumber']} onChange={props.handleChange('phoneNumber')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.otherPhoneNumber} variant={'outlined'} label={'Other Phone Number'} value={formData['otherPhoneNumber']} onChange={props.handleChange('otherPhoneNumber')} />
        </Grid>
        <Grid item xs={12}>
          <CusTextField disabled fullWidth={true} id={formData.address} variant={'outlined'} label={'Address'} value={formData['address']} onChange={props.handleChange('address')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.area} variant={'outlined'} label={'Area'} value={formData['area']} onChange={props.handleChange('area')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.city} variant={'outlined'} label={'City'} value={formData['city']} onChange={props.handleChange('city')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField  disabled fullWidth={true} id={formData.webSite} variant={'outlined'} label={'Web Site'} value={formData['webSite']} onChange={props.handleChange('webSite')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField disabled fullWidth={true} id={formData.linkedIn} variant={'outlined'} label={'LinkedIn'} value={formData['linkedIn']} onChange={props.handleChange('linkedIn')} />
        </Grid>
        <Divider style={{color:'#000', height:'3px', width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <CusTextField  fullWidth={true} className = {feildRequired.includes('jobTitle') && !Boolean(formData.jobTitle)?props.classes.emptyRequiredFields:null} id='jobTitle' variant={'outlined'} value={formData.jobTitle} label={'Job Title'} onChange={props.handleChange('jobTitle')} />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <Selectfield required={true} feildRequired={feildRequired} formData={formData} label={'Contract Type'} classes={props.classes} id='contractType' options={contactTypes} value={formData.contactType} fieldName={'contractType'} handleChange={props.handleChange} />
        </Grid>
        {formData.contractType !== 'Permanent' && <Grid item xs={12}>
         <fieldset className = {feildRequired.includes('contractDuration') && feildRequired.includes('contractValue') && feildRequired.includes('contractUnit') && !Boolean(formData.contractDuration) ?props.classes.emptyRequiredFields:props.classes.fieldSetStyle}>
            <legend>Contract Duration*</legend>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <CusRadio checked={selectedValue === 'set period'}
                id='contractDuration'
                onChange={handleRadioCheck}
                value="set period"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />Set Period
              <CusRadio
                checked={selectedValue === 'fixed contract'}
                onClick={handleRadioCheck}
                id='contractDuration'
                onChange={props.handleChange('contractDuration')}
                value="fixed contract"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />Fixed Contact
            </Grid>
            {selectedValue == 'set period'?<Fragment><Grid item xs={6} sm={6}>
            <CusTextField  className = {feildRequired.includes('contractValue') && !Boolean(formData.contractValue) || !Boolean(formData.contractDuration)?props.classes.emptyRequiredFields:null} required fullWidth={true} value={formData.contractValue} variant={'outlined'} label={'contract period'} onChange={props.handleChange('contractValue')} />
            </Grid>
            <Grid item xs={6} sm={6}>
            <Selectfield required={true} feildRequired={feildRequired} id={'contractUnit'} formData={formData} label={'contract period'} classes={props.classes}  options={['', 'weeks', 'months', 'years']} fieldName={'contractUnit'} handleChange={props.handleChange}/>
            </Grid></Fragment>:null}
            </Grid>
          </fieldset>
        </Grid>}
        <Grid item xs={12} sm={6}>
          <PickDate classes={props.classes} formData={formData} feildRequired={feildRequired} fullWidth={true} label="Starting date" handleDate={props.handleDate} fieldName={'startingDate'} formData={formData} />
        </Grid>
        <Grid item xs={12}>
        <fieldset className={props.classes.fieldSetStyle}>
            <legend>Salary Range</legend>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
              <CusTextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Minimum'} onChange={props.handleChange('minimumSalary')} />
              </Grid>
              <Grid item xs={6} sm={6}>
              <CusTextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Maximum'} onChange={props.handleChange('maximumSalary')} />
              </Grid>
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12} sm={6}>
          <CusTextField required   id='qualification' className = {feildRequired.includes('qualification')&& !Boolean(formData.qualification)?props.classes.emptyRequiredFields:null} fullWidth={true} variant={'outlined'} label={'Qualification'} onChange={props.handleChange('qualification')} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <PickDate classes={props.classes} formData={formData} feildRequired={feildRequired} required label={'Advert Closing Date*'} className = {feildRequired.includes('closingDate')&& !Boolean(formData.closingDate)?props.classes.emptyRequiredFields:null} handleDate={props.handleDate} fieldName={'closingDate'} formData={formData} />
        </Grid>
        <Grid item xs={12}>
          <CusTextareaAutosize  className={feildRequired.includes('jobDescription')&& !Boolean(formData.jobDescription)?props.classes.emptyRequiredFields:props.classes.textFieldFocused} style={{minWidth:'98%', paddngRight:'3px',}} rows={3} label={'Job Description*'} placeholder={'Job Description*'}  onChange={props.handleChange('jobDescription')}/>
        </Grid>
        <Grid item xs={12}>
          <fieldset className={feildRequired.includes('jobDuties') && !formData.jobDuties.some(job => job.length > 0)?props.classes.emptyRequiredFields:null}>
            <legend>Job Duties*</legend>
            <Grid container spacing={1}>
            {props.formData.jobDuties.map((duty) => (
              <Grid key={`duty${props.formData.jobDuties.length}`} item xs={12}>
                <CusTextField fullWidth={true} id={'duty' + duties.indexOf(duty)} value={duties[duties.indexOf(duty)]}  variant={'standard'} label={`duties - ${duties.indexOf(duty)+1}`} onChange={props.handleDutyChange(duties.indexOf(duty))}
                InputProps={{
                  endAdornment: <InputAdornment position="end"> <DeleteIcon button="true" style={{color:'black', '&:hover':{color:'#ee0011'}, cursor:'pointer'}} onClick={props.handleDelete(duties.indexOf(duty))}/> </InputAdornment>,
                }}/>
              </Grid>     
            ))}
            <Button style={{backgroundColor:'teal'}} onClick={props.addNewField}><PlusOneIcon /></Button>
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize style={{minWidth:'98%', paddingRight:'3px', }} className={props.classes.textFieldFocused} rows={3} label={'Other Information'} placeholder={'Other Information'}  onChange={props.handleChange('otherInformation')}/>
        </Grid>
    </Grid>
    {/* <ErrorMessage feildRequired={props.feildRequired} handleClose={props.handleClose}/> */}
    </div> 
  )
  }

FormContent.propTypes = {
  formData:PropTypes.object.isRequired,
}

export default withWidth()(FormContent)