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
import withWidth from '@material-ui/core/withWidth';
import { Hidden, Radio } from '@material-ui/core';


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
        />
        </Grid>
        </MuiPickersUtilsProvider>
  )
}

function Selectfield (props){
  const formData = props.formData
  return  (
  <TextField style={{marginTop:'0px', marginBottom:'0px', paddingTop:'0px',}} fullWidth={true} id={formData.contactType} value={props.value} select label={props.label} onChange={props.handleChange(props.fieldName)}
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

  function FormContent(props){
    const contactTypes = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
    const [selectedValue, setSelectedValue] = React.useState();
    // const [contractPeriod, setContractPeriod] = React.useState('');

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
      <Grid item xs={12} direction={'row-reverse'} sm={9}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField disabled fullWidth={true} id={formData.orgName} variant={'outlined'} label={'orgName'} value={formData['orgName']} onChange={props.handleChange('orgName')} />
        </Grid>
        <Grid item xs={12}>
          <TextField disabled fullWidth={true} id={formData.job} variant={'outlined'} label={'Company Description'} value={formData['job']} onChange={props.handleChange('job')} />
        </Grid>
        </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={12} sm={2} style={{display:'inline' ,float:'right'}}>
          <HomeIcon style={{width:'90px', height:'140px'}}/>
        </Grid>
        </Hidden>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.email} variant={'outlined'} label={'email'} value={formData['email']} onChange={props.handleChange('email')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.otherEmail} variant={'outlined'} label={'other Email'} value={formData['otherEmail']} onChange={props.handleChange('otherEmail')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.phoneNumber} variant={'outlined'} label={'Phone Number'} value={formData['phoneNumber']} onChange={props.handleChange('phoneNumber')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.otherPhoneNumber} variant={'outlined'} label={'Other Phone Number'} value={formData['otherPhoneNumber']} onChange={props.handleChange('otherPhoneNumber')} />
        </Grid>
        <Grid item xs={12}>
          <TextField disabled fullWidth={true} id={formData.address} variant={'outlined'} label={'Address'} value={formData['address']} onChange={props.handleChange('address')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.area} variant={'outlined'} label={'Area'} value={formData['area']} onChange={props.handleChange('area')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.city} variant={'outlined'} label={'City'} value={formData['city']} onChange={props.handleChange('city')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField  disabled fullWidth={true} id={formData.webSite} variant={'outlined'} label={'Web Site'} value={formData['webSite']} onChange={props.handleChange('webSite')} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField disabled fullWidth={true} id={formData.linkedIn} variant={'outlined'} label={'LinkedIn'} value={formData['linkedIn']} onChange={props.handleChange('linkedIn')} />
        </Grid>
        <Divider style={{color:'#000', height:'3px', width:'100%'}} />
        <Grid item xs={12} sm={6}>
          <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} value={formData.jobTitle} label={'Job Title'} onChange={props.handleChange('jobTitle')} />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <Selectfield formData={formData} label={'Contact Type'} options={contactTypes} value={formData.contactType} fieldName={'contactType'} handleChange={props.handleChange} />
        </Grid>
        <Grid item xs={12}>
        <fieldset>
            <legend>Contract Duration</legend>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <Radio checked={selectedValue === 'set period'}
                onChange={handleRadioCheck}
                value="set period"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
              />Set Period
              <Radio
                checked={selectedValue === 'fixed contract'}
                onClick={handleRadioCheck}
                onChange={props.handleChange('contractDuration')}
                value="fixed contract"
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'B' }}
              />Fixed Contact
            </Grid>
            {selectedValue == 'set period'?<Fragment><Grid item xs={6} sm={6}>
            <TextField fullWidth={true} id={formData.jobTitle} value={formData.contractDuration.contractValue} variant={'outlined'} label={'contract period'} onChange={props.handleChange('contractValue')} />
            </Grid>
            <Grid item xs={6} sm={6}>
            <Selectfield formData={formData} label={'contract period'} value={formData.contractDuration.periodUnit} options={['', 'weeks', 'months', 'years']} fieldName={'periodUnit'} handleChange={props.handleChange}/>
            </Grid></Fragment>:null}
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PickDate fullWidth={true} label="Starting date" handleDate={props.handleDate} fieldName={'startingDate'} formData={formData} />
        </Grid>
        <Grid item xs={12}>
        <fieldset>
            <legend>Salary Range</legend>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
              <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Minimum'} onChange={props.handleChange('minimum')} />
              </Grid>
              <Grid item xs={6} sm={6}>
              <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Maximum'} onChange={props.handleChange('maximum')} />
              </Grid>
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth={true} id={formData.jobTitle} variant={'outlined'} label={'Quilification'} onChange={props.handleChange('quilification')} />
        </Grid>
        <Grid item xs={12} sm={6}>
        <PickDate label={'Advert Closing Date'} handleDate={props.handleDate} fieldName={'closingDate'} formData={formData} />
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize style={{minWidth:'98%', paddngRight:'3px',}} rows={3} label={'Job Description'} placeholder={'Job Description'}  onChange={props.handleChange('jobDescription')}/>
        </Grid>
        <Grid item xs={12}>
          <fieldset>
            <legend>Job Duties</legend>
            <Grid container spacing={1}>
            {props.formData.jobDuties.map((duty) => (
              <Grid item xs={12}>
                <TextField fullWidth={true} id={duties.indexOf(duty)} value={duties[duties.indexOf(duty)]}  variant={'standard'} label={`duties - ${duties.indexOf(duty)+1}`} onChange={props.handleDutyChange(duties.indexOf(duty))}
                InputProps={{
                  endAdornment: <InputAdornment position="end"> <DeleteIcon button style={{color:'black', '&:hover':{color:'#ee0011'}, cursor:'pointer'}} onClick={props.handleDelete(duties.indexOf(duty))}/> </InputAdornment>,
                }}/>
              </Grid>           
            ))}
            <Button style={{backgroundColor:'teal'}} onClick={props.addNewField}><PlusOneIcon /></Button>
            </Grid>
          </fieldset>
        </Grid>
        <Grid item xs={12}>
          <TextareaAutosize style={{minWidth:'98%', paddingRight:'3px',}} rows={3} label={'Other Information'} placeholder={'Other Information'}  onChange={props.handleChange('otherInformation')}/>
        </Grid>
    </Grid>
    </div> 
  )
  }

FormContent.propTypes = {
  formData:PropTypes.object.isRequired,
}

export default withWidth()(FormContent)