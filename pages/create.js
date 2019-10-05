// import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import useStyles from '../components/styles'
import JobSeekerSignUp from '../components/forms/JobseekerSignUpForm'

let formPosition = {
    marginTop: '20px',
    marginLeft: '370px'
}

export default function Create(){
    // creating a useStyles variables 
    const classes = useStyles()
    return(

        <div>
            <Header activePage={'create'}/>
            <div className={classes.createSection}>
                <div style={formPosition} className="max-w-md bg-white p-4 my-5 absolute">
                    <JobSeekerSignUp />
                </div>
            </div>
            <Footer /> 
        </div>    
    );
}