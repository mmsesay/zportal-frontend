// import components
import fetch from 'isomorphic-unfetch';
import { fade, makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import Footer from '../components/Footer';
import bgImage from '../images/homeBg.svg'
import {CreateCard, LoginTrigger} from '../components/createCard'
import JobCards from '../components/jobCards';
import { server } from '../config';

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

export default function Home(props){
    const classes = useStyles()
    
    return(
        
        <div style={{display:'flex', flexDirection:'column'}}>
            <div style={{position:'relative'}}>
            <Header activePage={'home'}/>
            </div>
            <div  className={classes.mainBody}>
                {/* Side filter will come right here on the left */}
                <div></div>
                <ul className="bg-white">
                    {props.organizations.map(jb => (
                        <li>
                            <a>{jb.first_name}</a>
                            <br/>
                            <a>{jb.company_name}</a>
                            <br/>
                            <a>{jb.bio}</a>
                            <br/>
                            <a>{jb.industry}</a>
                        </li>
                    ))}
                </ul>
                {/* Hooking the job cards right here */}
                <div style={{paddingLeft:'400px', position:'relative',  justifyContent:'flex-start', alignSelf:'flex-start', marginLeft:'auto', marginRight:'4px'}}>
                    <JobCards objects={props.jobs} organization={props.orgnizations}/>
                </div>
            </div>
            <Footer />      
        </div> 
    );
    
}

Home.getInitialProps = async function() {
    // fetch request to get jobs
    const jobResult = await fetch(`${server}/jobs`);
    const jobData = await jobResult.json();

    // fetch request to get organization
    const organizationResult = await fetch(`${server}/org`);
    const organizationData = await organizationResult.json();

        
    // // will hold the organization id

    // fetch request to get organization
    // const organizationResult = await fetch(`${server}/org/${req_Org_ID}`);
    // const orgnizationData = await organizationResult.json();

    const orgData =  organizationData.organization.forEach(function (sandwich, index) {
        return sandwich.id, sandwich.company_name, sandwich.admin // value
    });

    console.log('org id-> '+orgData)
    console.log('jobs-> '+jobData.jobs.jobTitle)

    // console.log('res->'+ res)
    // console.log('data->'+ data.jobs.jobTitle)

    console.log(`OrganizationID fetched. Count: ${organizationData.organization.length}`);
    console.log(`Show data fetched. Count: ${jobData.jobs.length}`);

    // <ul>
    //     {props.jobs.map(jb => (
    //         <li>
    //             d<a>{jb.jobTitle}</a>
    //         </li>
    //     ))}
    // </ul>
  
    return {
      jobs: jobData.jobs,
      organizations: organizationData.organization
    };
};