// import components
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { server } from '../config';
import Router from 'next/router';
import JobSeekerSignUp from '../components/forms/JobseekerSignUpForm.js';
// import createBG from '../images/createBG.jpg';

let formPosition = {
    marginTop: '20px',
    marginLeft: '370px'
}

let bgStyle = {
    // backgroundImage: `url(${createBG})`,
    backgroundRepeat:'no-repeat', 
    backgroundSize:'cover', 
    backgroundPosition: 'center',
    width: 'auto',
    height: '800px',
    margin: 0
}

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
            // if the response was ok
            if(res.status === 201){
                Router.push('/login')
            }
            else if(res.status === 404){
                res.json()
                    .then(err => {
                        console.log(err.error)
                    })
            }
        })
    }
    
    render = () => {
        
        return(
            <div>
                <Header activePage={'create'}/>
                <div style={bgStyle}>
                    <div style={formPosition} className="max-w-md bg-white p-4 my-5 absolute">
                        <JobSeekerSignUp callbackFromParent={this.myCallback} />
                    </div>
                </div>
                <Footer /> 
            </div>    
        );
    }
    
}