// import components

import { fade, makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import Footer from '../components/Footer';
import bgImage from '../images/homeBg.svg'
import {CreateCard, LoginTrigger} from '../components/createCard'
import JobCards from '../components/jobCards';

const useStyles = makeStyles(theme => ({
    mainBody:{
        display: 'flex',
        position: 'relative',
        backgroundColor: '#0D1719', 
        width: '100%', 
        height:'1500px',
        marginRight:'0px',
        marginLeft:'0px',
        justifyContent:'flex-end',
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
                {/* Side filter will come right here on the left */}
                <div>

                </div>
                {/* Hooking the job cards right here */}
                <div style={{paddingLeft:'400px', position:'relative',  justifyContent:'flex-start', alignSelf:'flex-start', marginLeft:'auto', marginRight:'4px'}}>
                    <JobCards />
                </div>
            </div>
            <Footer />      
        </div> 
    );
    
}