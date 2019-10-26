import React from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import FormContent from './formContent'
import { withStyles } from '@material-ui/styles';
import { Divider } from '@material-ui/core';
import JobPrview from './jobPreview'

const styles = (theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
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

class JobPostingForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formData:props.formData,
      preview:false
    }

    this.handleFormValueChange = this.handleFormValueChange.bind(this)
    this.addNewField = this.addNewField.bind(this)
    this.handleDutyChange = this.handleDutyChange.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.handlePreview = this.handlePreview.bind(this)
  }

  addNewField = event =>{
    this.setState({...this.state.formData.jobDuties.push("")})
  }

  handleDutyChange = index => event =>{
    this.setState({...this.state.formData.jobDuties[index]=event.target.value})
  }

  handleDelete = index => event =>{
    this.setState({...this.state.formData.jobDuties.splice(index, 1)})
  }

  handleFormValueChange = name => event =>{
    var data = this.state.formData
    if(name == 'contractValue' || name === 'periodUnit'){
      data.contractDuration[name] = event.target.value
    }else if(name == 'minimum' || name === 'maximum'){
      data.salaryRange[name] = event.target.value
    }else{
      data[name]=event.target.value || 0
    }
    this.setState({data})
  }

  handleDate = name => date => {
    var data = this.state.formData
    data[name] = date
    this.setState({data})
  }

  handlePreview = event =>{
    this.setState({...this.state.preview=!this.state.preview})
  }

  render(){
    const {classes} = this.props
    const data = this.state.formData
    const previewDialog = (
      <JobPrview data={data} handlePreview={this.handlePreview} open={this.state.preview} />
    )
  
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="job posting form"
        >
          <div style={{display:'flex', justifyContent:'space-between'}}><DialogTitle id="job posting form">Job posting form</DialogTitle>
        <Button onClick={this.props.handleClose}>
        <CloseIcon/>
        </Button>
        </div>
          <DialogContent>
              <FormContent formData={this.state.formData} handleDate={this.handleDate} handleClosingDate={this.handleClosingDate} addNewField={this.addNewField} handleDutyChange={this.handleDutyChange} handleDelete={this.handleDelete} handleChange={this.handleFormValueChange}/>
          </DialogContent>
          <Divider />
          <DialogActions style={{display:'flex', justifyContent:'space-between'}}>
            <div><Button onClick={this.handlePreview} className={classes.button} >Preview</Button></div>
            <div><Button onClick={this.props.handleClose} className={classes.button}>Post</Button></div>
          </DialogActions>
          {previewDialog}
        </Dialog>
      </div>
    )}
}

JobPostingForm.propTypes = {
    formData:PropTypes.object.isRequired,
    open:PropTypes.boolean,
  }

  export default withStyles(styles) (JobPostingForm)