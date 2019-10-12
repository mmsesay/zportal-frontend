// import components
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import useStyles from '../components/styles'
import { server } from '../config';
import Router from 'next/router';
import JobSeekerSignUp from '../components/forms/JobseekerSignUpForm.js';

let formPosition = {
    marginTop: '20px',
    marginLeft: '370px'
}

// const classes = useStyles();

export default class Create extends React.Component {
    // creating a useStyles variables 

    constructor(props){
        super(props);
        this.state = {};
    }

    // this callback is receiving data from the child component 
    myCallback = (dataFromChild) => {
        // post request to the jobseeker signup
        fetch(`${server}/jsk/signup`, {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFromChild)
        }).then((res) => {
            res.status === 200 ? Router.push('/login') : console.log('failed to post')
            
            return console.log(res.json())
        }) 
    }

    
    render = () => {
        
        return(
            <div>
                <Header activePage={'create'}/>
                <div> {/*className={classes.createSection}*/}
                    <div style={formPosition} className="max-w-md bg-white p-4 my-5 absolute">
                        <JobSeekerSignUp callbackFromParent={this.myCallback} />
                    </div>
                </div>
                <Footer /> 
            </div>    
        );
    }
    
}