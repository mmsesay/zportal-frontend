import React,{useEffect }from 'react';
 import FullJobCard from './FullJobCard';
 import CssBaseline from '@material-ui/core/CssBaseline';


class JobCards extends React.Component {

constructor(props){

  super(props);
 
  const cards = props.objects.filter((el)=>{
    return ((el.id >= 0)  && (el.id<9))
  })

  // const allOrganization = props.organizations
  
  // props.organizations.map((data)=>{
  //   // return data.id
  //   console.log(data.id)
  // })
  
   this.state={
    objDisplay:cards,
    pop:false,
    number:1,      
    toBeDisplay:[1,2,3,4,5,6,7,8,9],
    desription:props.objects[0],
    topController:150,
    // main:props.objects,
    objects: props.objects,
    organizations: props.organization
   }
}
 
componentWillUnmount(){}
  toBeDisplayControllerPlus=(val)=>{
    this.setState( {
     toBeDisplay:[
      this.state.toBeDisplay[0]+1, 
      this.state.toBeDisplay[1]+1,
      this.state.toBeDisplay[2]+1,
      this.state.toBeDisplay[3]+1,
      this.state.toBeDisplay[4]+1, 
      this.state.toBeDisplay[5]+1, 
      this.state.toBeDisplay[6]+1, 
      this.state.toBeDisplay[7]+1,
      this.state.toBeDisplay[8]+1 ]
    })
  }
 
  toBeDisplayControllerMinus=(val)=>{
    if(this.state.toBeDisplay[0]>1){
      this.setState( {
       toBeDisplay:[
        this.state.toBeDisplay[8]-9, 
        this.state.toBeDisplay[8]-8,
        this.state.toBeDisplay[8]-7, 
        this.state.toBeDisplay[8]-6, 
        this.state.toBeDisplay[8]-5, 
        this.state.toBeDisplay[8]-4,
        this.state.toBeDisplay[8]-3,
        this.state.toBeDisplay[8]-2,
        this.state.toBeDisplay[8]-1
      ]
      })
    }
  }

  displayerFunction=(val)=>{
        const start = ((val*9)-9)
        const end = (val*9)
        const cards = props.objects.filter(el=>{
         if(el.id ===((val*9)-9)){
           el.shower='show'
           this.setState({
             desription:el
           })
         }else{
           el.shower=''
         }
      return ((el.id >= start)  && (el.id<end)) 
    })
      this.setState({
         objDisplay:cards,
         number:val 
      })       
  }

  ShowerSign=(val)=>{
  
      const obj1 =  this.state.objDisplay.map(element => {
              
        if(element.id===val){
          this.setState({
            desription:element
          })
         element.shower='show';
      }else{
        element.shower='';
      }
        return( element)
      })

      this.setState({
        objDisplay:obj1 
      })

  }

  render(){  

     return (
     
    <div style={{display:'flex',margin:'0px', padding:'0px',alignItems:'end',justifyContent:'flex-end'}} >
     <CssBaseline />
      
           <FullJobCard 
            toBeDisplay={this.state.toBeDisplay} 
            toBeDisplayControllerPlus={this.toBeDisplayControllerPlus} 
            toBeDisplayControllerMinus={this.toBeDisplayControllerMinus}
            ShowerSign={this.ShowerSign} 
            objs={this.state.objDisplay} 
            number = {this.state.number}
            // main={this.state.main}
            objects={this.state.objects.length}
            organizations={this.state.organizations}
            desription={this.state.desription} 
            displayerFunction={this.displayerFunction}
            topController ={this.state.topController} />
    </div>
  )
  }
 
}

export default JobCards;
