// import components
import Header from '../components/Header'
import Footer from '../components/Footer'
import useStyles from '../components/styles'
import JobSeekerLogin from '../components/forms/JobseekerLoginForm'


export default function Login(){
    // creating a useStyles variables 
    const classes = useStyles()
    return(

        <div>
            <Header activePage={'login'}/>
            <div className={classes.loginSection}>
                <div className="max-w-sm bg-white p-4 my-5 mt-16 mx-auto">
                    <JobSeekerLogin />
                </div>
            </div>
            <Footer /> 
        </div>    
    );
}