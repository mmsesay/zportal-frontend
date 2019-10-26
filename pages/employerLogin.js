/*
This will be the parent container for the login
and signup components

Requirements
Have a spinner wrapped around it that will
be turned on when the user clicks submit

have two tabs for Login and Singup 

either tab could become active
*/

import { withRouter } from 'next/router';
import React from 'react';
import '../static/styles.css';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from '../components/forms/employerLoginForm.js';
import SignUp from '../components/forms/employerSignUpForm.js';
import fetch from 'isomorphic-unfetch';
import { server } from '../config';
import Router from 'next/router';

const TabHeader = (props) => {
    const activeStyle = "m-2 p-4 text-3xl text-red font-bold font-extrabold border-b-4";
    const baseStyle = "m-2 p-4 text-3xl font-normal text-green";
    const style = props.active ? activeStyle : baseStyle;
    return (
        <a href="#" className={style}>{props.title}</a>
    );
}

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        const { router } = this.props;
        const login = router.query.login | 0;
        let createActive;
        if (login === 1) {
            createActive = true;
        } else {
            createActive = false;
        }
        this.state = {
            createActive : createActive,
            data: []
        };
    }

    loginHandler = () => {
        if (this.state.createActive) {
            this.setState({...this.state,createActive:false});
        }
    }

    createHandler = () => {
        if (!this.state.createActive) {
            this.setState({...this.state,createActive:true});
        }
    }

    // this callback is receiving data from the child component 
    myCallback = (dataFromChild) => {

        // dataFromChild.forEach(data => {
            console.log('first name: '+ dataFromChild.first_name);
            console.log('last name: '+ dataFromChild.last_name);
            console.log('job title: '+ dataFromChild.jobtitle);
            console.log('phone: '+ dataFromChild.phone);
            console.log('company: '+ dataFromChild.company_name);
            console.log('email: '+ dataFromChild.email);
            console.log('address: '+ dataFromChild.address);
            console.log('password: '+ dataFromChild.password);
            console.log('confirm pwd: '+ dataFromChild.confirm_password);
            console.log('industry: '+ dataFromChild.industry);
            console.log('city: '+ dataFromChild.city);
            console.log('district: '+ dataFromChild.district);
            console.log('bio: '+ dataFromChild.bio);
        // })
        fetch(`${server}/org/signup`, {
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFromChild)
        }).then((res) => {
            res.status === 200 ? console.log('data sent') : console.log('failed to post')
            Router.push('/employer')
            return console.log(res.json())
        })
        
    }

    render = () => {
        const activeStyle = "m-3 p-5 text-3xl text-red font-bold font-extrabold border-b-2 border-black"
        const nonActiveStyle = "m-3 p-5 text-3xl font-normal text-green"
        let child;
        if (this.state.createActive) {
            child = <SignUp callbackFromParent={this.myCallback} />
        } else {
            child = <Login />
        }
        return (
            <div id="body">
                {/* calling the header */}
                <Header activePage={'employer'}/> 
                <div className="flex">
                    <div className="mx-auto bg-white p-4 my-5 mt-16">
                        <div id="main">
                            <div className="flex" >
                                <div className="mx-auto bg-white p-4 my-5 rounded-lg max-w-md">
                                    <div className="p-3 flex">
                                        <div className="mx-auto">
                                            <a href="#" style={{"textDecoration":"none"}} className={this.state.createActive ? activeStyle : nonActiveStyle} onClick={this.createHandler}>Create</a>
                                            <a href="#" style={{"textDecoration":"none"}} className={this.state.createActive ? nonActiveStyle : activeStyle} onClick={this.loginHandler}>Login</a>
                                        </div>
                                    </div>
                                    <div className="p-3 my-4">
                                        {child}
                                    </div>
                                </div>
                                <style jsx global>{`
                                    body {
                                        background-color:#253335;
                                    }
                                `}
                                </style>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer /> 
            </div>
        );
    }
}

export default withRouter(LoginPage);
