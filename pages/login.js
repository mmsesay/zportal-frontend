// import components
import React from 'react'
import fetch from 'isomorphic-unfetch';
import Header from '../components/Header'
import Footer from '../components/Footer'
import useStyles from '../components/styles'
import JobSeekerLogin from '../components/forms/JobseekerLoginForm'
import { server } from '../config';
import Router from 'next/router';

let formPosition = {
    marginTop: '50px',
    marginLeft: '800px'
}
// this callback is receiving data from the child component 
// async function myCallback(dataFromChild){
//     post request to the jobseeker signup
//     fetch(`${server}/jsk/login`, {
//         method: 'post',
//         headers: {
//           'Accept': 'application/json, text/plain, */*',
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(dataFromChild)
//     }).then((res) => {
//         res.status === 200 ? Router.push('/login') : console.log('failed to post')
//         return console.log(res.json())
//     }) 
// }

// creating a useStyles variables 
// const classes = useStyles();

export default class Login extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {};
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
            if(res.status == 200){
                res.json()
                .then(re => {
                    console.log(re.user)
                    Router.push({
                        pathname: '/jobSeekerProfile', 
                        query: {
                            user: re.user
                        }
                    })
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
            // this.props.token === token ?  : console.log('failed to login')    
        }) 
    }

    render = () => {
        return(

            <div>
                <Header activePage={'login'}/>
                <div> {/*className={classes.loginSection}*/}
                    <div style={formPosition} className="max-w-sm bg-white p-4 my-5 absolute">
                        <JobSeekerLogin callbackFromParent={this.myCallback} token={this.props.token} />
                    </div>
                </div>
                <Footer /> 
            </div>    
        );
    }
}

Login.getInitialProps = async function() {
    const getResult = await fetch(`${server}/jsk/login`);
    let token = '';

    if (getResult.ok) {
        token = await getResult.json()
        // console.log(token)
    } else {
        console.log('Failed to get token.')
    }

    return {
      token: token
    };
};