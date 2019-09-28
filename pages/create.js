// import components
import Header from '../components/Header'
import useStyles from '../components/styles'
import JobSeekerSignUp from '../components/forms/JobseekerSignUpForm'


export default function Create(){
    // creating a useStyles variables 
    const classes = useStyles()
    return(

        <div className={classes.createSection}>
            <Header activePage={'create'}/>
            <div className="max-w-md bg-white p-4 my-5 mt-16 mx-auto">
                <JobSeekerSignUp />
            </div>
        </div>    
    );
}