// import components
import Header from '../components/Header'
import useStyles from '../components/styles'
import JobSeekerLogin from '../components/JobseekerLoginForm'


export default function Login(){
    // creating a useStyles variables 
    const classes = useStyles()
    return(

        <div className={classes.loginSection}>
            <Header activePage={'login'}/>
            <div className="max-w-sm bg-white p-4 my-5 mt-16 mx-auto">
                <JobSeekerLogin />
            </div>
        </div>    
    );
}