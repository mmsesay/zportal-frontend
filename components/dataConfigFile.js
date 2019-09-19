import React from 'react';

 import FullJobCard from './FullJobCard';
 import CssBaseline from '@material-ui/core/CssBaseline';

  


class  App extends React.Component {


 

  state={
    pop:false,
    desription:{
      id:0,      
      jobTitle:' showings vital',
      companyName:' web  developer',
       
      
      JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
      // this field is optional
      contactDuration:Math.random*50,
      startingDate:Date.now(),
      salaryRange:Math.random*50000,
      jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
      requireQualification:'Masters',
      additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
      emailToApply:'amadubarie@gmail.com',
      
       closingDate:'01/02/2019',
       Location:'Kabala',
       shower:'show'
     },
 obj : [{
  id:0,      
      jobTitle:' showings vital',
      companyName:'java developer',
       
      
      JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
      // this field is optional
      contactDuration:Math.random*50,
      startingDate:Date.now(),
      salaryRange:Math.random*50000,
      jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
      requireQualification:'Masters',
      additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
      emailToApply:'amadubarie@gmail.com',
      
       closingDate:'01/02/2019',
       Location:'Kabala',
       shower:'show'
  },
  {
    id:1,
      
    jobTitle:' AdvocAid is seeking ',
    companyName:'android developer',
     
    
    JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
    // this field is optional
    contactDuration:Math.random*50,
    startingDate:Date.now(),
    salaryRange:(Math.random*50000),
    jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
    requireQualification:'Masters',
    additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
    emailToApply:'amadubarie@gmail.com',
    
     closingDate:'01/02/2019',
     Location:'Kenya',
    shower:''
  },
  {
    id:2,
   
      
    jobTitle:'seeking a full time vital',
    companyName:'Tecloud   developer',
     
    
    JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
    // this field is optional
    contactDuration:'Full Time',
    startingDate:Date.now(),
    salaryRange:Math.random*50000,
    jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
    requireQualification:'Masters',
    additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
    emailToApply:'amadubarie@gmail.com',
    
     closingDate:'01/02/2019',
     Location:'Freetown',
    shower:''
  },
  {
    id:3,
    jobTitle:'full time Executive Director',
    companyName:'css developer',
     
    
    JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
    // this field is optional
    contactDuration:Math.random*50,
    startingDate:Date.now(),
    salaryRange:Math.random*50000,
    jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
    requireQualification:'Masters',
    additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
    emailToApply:'amadubarie@gmail.com',
    
     closingDate:'01/02/2019',
     Location:'Kabala',
    shower:''
  },{
    id:4,
    jobTitle:'Director to lead its vital',
    companyName:' web developer',
     
    
    JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
    // this field is optional
    contactDuration:'Per Time',
    startingDate:Date.now(),
    salaryRange: Math.random*50000,
    jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
    requireQualification:'Masters',
    additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
    emailToApply:'amadubarie@gmail.com',
    
     closingDate:'01/02/2019',
     Location:'Saudi',
     shower:''
   },
   {
     id:5,
     jobTitle:' AdvocAid lead its vital',
     companyName:'advance developer',
      
     
     JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
     // this field is optional
     contactDuration:Math.random*50,
     startingDate:Date.now(),
     salaryRange:Math.random*50000,
     jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
     requireQualification:'Masters',
     additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
     emailToApply:'amadubarie@gmail.com',
     
      closingDate:'01/02/2019',
      Location:'London',
     shower:''
   },
   {
     id:6,
     jobTitle:' AdvocAid is seeking  ',
     companyName:'fresh developer',
      
     
     JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
     // this field is optional
     contactDuration:Math.random*50,
     startingDate:Date.now(),
     salaryRange:Math.random*50000,
     jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
     requireQualification:'Masters',
     additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
     emailToApply:'amadubarie@gmail.com',
     
      closingDate:'01/02/2019',
      Location:'U.S.A',
     shower:''
   },
   {
     id:7,
     jobTitle:' AdvocAid is seeking  ',
     companyName:'team developer',
      
     
     JobDescription:'AdvocAid is seeking a full time Executive Director to lead its vital and challenging work in Sierra Leone. This is a great opportunity ',
     // this field is optional
     contactDuration:Math.random*50,
     startingDate:Date.now(),
     salaryRange:Math.random*50000,
     jobDutyAndRresponsibility:'This is a great opportunity to make a real difference in the lives of women and girls through the provision of holistic access to justice services',
     requireQualification:'Masters',
     additionalInformation:'A window must open towards your right hand when the card is clicked showing the above details',
     emailToApply:'amadubarie@gmail.com',
     
      closingDate:'01/02/2019',
      Location:'kono',
     shower:''
   }]
  }


  ShowerSign=(val)=>{
     
    
      const arr1 =  this.state.obj.map(element => {
        
      
        if(element.id===val){
          this.setState({
            desription:element
          })
         element.shower='show';
      }else{
        element.shower='hide';

      }
        return( element)})

      this.setState({
        obj:arr1
      })
    
  }





  render(){  
   
     return (
     
    <div style={{display:'flex',margin:'0em',alignItems:'center',justifyContent:'center'}} >
      <CssBaseline />

     
           <FullJobCard ShowerSign={this.ShowerSign} arr={this.state.obj} desription={this.state.desription} />



    </div>
  );
  }
 
}

export default App;
