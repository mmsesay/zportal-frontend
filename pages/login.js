// import components
import React from 'react'
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { fade, makeStyles } from '@material-ui/core/styles';
import JobSeekerLogin from '../components/forms/JobseekerLoginForm'
import { server } from '../config';
import Router from 'next/router';
import loginBG from '../images/loginBG.jpg';

let formPosition = {
    marginTop: '50px',
    marginLeft: '700px'
}

let bgStyle = {
    backgroundImage: `url(${loginBG})`,
    backgroundRepeat:'no-repeat', 
    backgroundSize:'cover', 
    backgroundPosition: 'center',
    width: 'auto',
    height: '800px',
    margin: 0
}

export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {};
        // creating a useStyles variables 
    }

    // this callback is receiving data from the child component 
    myCallback = (dataFromChild) => {
        // post request to the jobseeker signup
        fetch(`${server}/jsk/login`, {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFromChild)
        }).then((res) => {

            // console.log(res)
            if(res.status === 200){
                res.json()
                .then(re => {
                    // console.log(re);
                    // console.log('id: '+ re.userDetail.id)
                    Router.push('/jobSeekerProfile')
                })
                .catch(e => {
                    console.log(e.error);
                });
            }else if(res.status == 500){
                res.json()
                .then(err => Promise.reject(err))
                .catch(e => {
                    console.log(e.error);
                });
            }else if(res.status == 401){
                res.json()
                .then(err => Promise.reject(err))
                .catch(e => {
                    console.log(e.error);
                });
            }    
        }) 
    }

    render = () => {
        return(
            <div>
                <Header activePage={'login'}/>
                {/*  style={bgStyle} */}
                <div> 
                    <div style={formPosition} className="max-w-sm bg-white p-4 my-5 absolute">
                        <JobSeekerLogin callbackFromParent={this.myCallback} token={this.props.token} />
                    </div>
                </div>
                <Footer /> 
            </div>    
        );
    }
}

// login api call function
Login.getInitialProps = async function() {
    const getResult = await fetch(`${server}/jsk/login`);
    let token = '';

    if (getResult.ok) {
        token = await getResult.json()
        console.log(token)
    } else {
        console.log('Failed to get token.')
    }

    return {
      token: token
    };
};