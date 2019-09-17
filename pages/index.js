// import components

import { fade, makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/navBar'
import bgImage from '../images/homeBg.svg'
import {CreateCard, LoginTrigger} from '../components/createCard'

const useStyles = makeStyles(theme => ({
    mainBody:{
        display: 'flex',
        flexDirection: 'row',
    },
   bodyContent:{
    display: 'flex',
    position: 'absolute',
    backgroundImage: `url(${bgImage})`,
    backgroundRepeat:'no-repeat', 
    backgroundSize:'cover', 
    width: '100%', 
    height:'1500px',
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
            <NavBar />
            </div>
            <div  className={classes.mainBody}>
                    <div className={classes.bgColorTop}>

                    </div>
                    <div className={classes.bodyContent}>
                        <div style={{display:'flex', flexDirection:'column'}}></div>
                        {/* <CreateCard />
                        <LoginTrigger/> */}
                    </div>
            </div>
        </div> 
    );
}