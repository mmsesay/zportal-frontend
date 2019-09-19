// import components

import { fade, makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import bgImage from '../images/homeBg.svg'
import {CreateCard, LoginTrigger} from '../components/createCard'

const useStyles = makeStyles(theme => ({
    mainBody:{
        display: 'flex',
        position: 'relative',
        backgroundColor: '#0D1719', 
        width: '100%', 
        height:'1500px',
        marginRight:'0px',
        marginLeft:'0px',
    },
   bgColorTop:{
       height: '100%',
       width: '100%',
        position: 'absolute',
       backgroundColor: '#253335',
   }
}))


export default function Home(){
    const classes = useStyles()
    return(
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{position:'relative'}}>
            <Header activePage={'home'}/>
            </div>
            <div  className={classes.mainBody}>
                    
                <div>
                    <div style={{display:'flex', flexDirection:'column'}}></div>
                    {/* <CreateCard />
                    <LoginTrigger/> */}
                </div>
            </div>
                    
           
        </div> 
    );
}