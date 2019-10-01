import { red,gold,blue } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
 
const useStyles = makeStyles(() => (
    {
  
  
  // start for 550 xs
  
    cardxs: {
       padding:'0',
       height:'auto',
       width:'85%',
     maxWidth:'120%',
    // backgroundColor: red[100],
      marginTop:'0.3em',    
      display:'flex',
      marginLeft:'22em',
      // borderbo:'3px solid red',
      borderRight:'0px ',
      boxSizing:'birder-box',
      borderBottom: '.3em solid gray'
      
    },
  
    
    
    ArrowLeftHide:{
  display:'none'
    }, 
     
      CardHeader:{
      // backgroundColor: red[200],
      padding:'0em', 
      marginTop:'-5em'
    },
    
    avatar: {
      backgroundColor: red[500],
      width:'3em',
      height:'3em',
      marginTop:'-1em',
      marginLeft:'.1em'
    },
  
  
    CardContent:{
     
  display:'flex',
   marginTop:'-1em',
  alignItems:'center',
  justifyContent:'space-between'
      
       },
       typo:{
         color:red[500]
       },
       typos:{
        color:'gray'
      },
  
       typom:{
        color:red[500],
        fontSize:'1em'
      },
      typomblack:{
        fontSize:'1em',
        color:'gray'
      },
      //  done of xs
      
  
      // start for s 700
    cards: {
       
      // width:'212%',
      margin:'1em',
      marginLeft:'16em',
      width:'100%',
      maxwidth:'200%',
      // backgroundColor: red[100],
      
       height:'auto',
      borderBottom: '.3em solid gray',
      marginTop:'0.3em',    
      display:'flex',
       
      
      borderRight:'0px ',
      boxSizing:'birder-box',
      boxShadow: '0px 0px'
      
      
    },
  
    ArrowLeftShows:{
      display:'none'
      },
      CardHeaders:{
        // backgroundColor: red[200],
        padding:'0em', 
        marginTop:'-5.8em'
      },
    
      
      // end for s
  
      // start for m 900
      cardm: {
         
        marginLeft:'-70%',
         width:'120%',
       maxWidth:'120%',
      // backgroundColor: red[100],
        marginTop:'0.3em',    
        display:'flex',
       
        border:'0px solid red',
        borderRight:'0px ',
        boxSizing:'birder-box',
        borderBottom: '.2em solid gray'
        
      },
  
      cardmSelected: {
        marginLeft:'-70%',
        width:'120%',
      maxWidth:'120%',
      
       
      // backgroundColor: red[100],
        marginTop:'0.3em',    
        display:'flex',
       
        
        borderRight:'0px ',
        boxSizing:'birder-box',
        border: '2px solid gold',
        borderLeft:'2px solid gold'
        
      },
      avatarm: {
        backgroundColor: red[500],
        width:'1.8em',
        height:'1.8em',
        
        marginTop:'0.4em',
        marginLeft:'.1em'
      },
      avatars:{
        backgroundColor: red[500],
        width:'1.8em',
        height:'1.8em',
        
        marginTop:'0.4em',
        marginLeft:'.1em'
      },
      CardHeaderm:{
        // backgroundColor: red[200],
        padding:'0em',    
        marginTop:'-4.2em' ,
        
      },
     
      ArrowLeftShowm:{
         
      backgroundColor:'#0D1619',
      marginLeft:'97%',
         color:'#0D1619',
          
        transform:'rotate(45deg)',
         marginTop:'10%',
     
        
        },
    
      ArrowLeftHidem:{
        backgroundColor:'transparent',
        marginLeft:'97%',
        color:'transparent',
        
       transform:'rotate(45deg)',
        marginTop:'10%',
          },
          
  
  red:{
    background:red[400],
    color:'white'
  },
  yellow:{
  background:yellow[400],
  color:'white'
  },
  blue:{
    background:blue[500],
  color:'white'
  }
          
        
  }));

  export default useStyles