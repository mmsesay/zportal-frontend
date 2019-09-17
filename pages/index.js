// import components

import { fade, makeStyles } from '@material-ui/core/styles';
// import NavBar from '../components/navBar'
// import bgImage from '../static/images/homeBg.svg'
import Header from '../components/Header'

const useStyles = makeStyles(theme => ({
   bodyContent:{
    position: 'absolute',
    top: 700,
    // backgroundImage: `url(${bgImage})`,
    backgroundRepeat:'no-repeat', 
    backgroundSize:'cover', 
    width: '100%', 
    height:'1500px',
   },
   bgColorTop:{
       height: '2000px',
       width: '100%',
        position: 'absolute',
       backgroundColor: '#253335',
   }
}))


export default function Home(){
    const classes = useStyles()
    return(
        <div className={classes.mainBody}>
            {/* calling the header */}
            <Header /> 
            <div className={classes.bgColorTop}>
                <div className={classes.bodyContent}>
                </div>
            </div>

        </div>    
    );
}