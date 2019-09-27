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
import Login from '../components/employerLoginForm.js';
import SignUp from '../components/employerSignUpForm.js';




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
            createActive : createActive
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

    render = () => {
        const activeStyle = "m-3 p-5 text-3xl text-red font-bold font-extrabold border-b-2 border-black"
        const nonActiveStyle = "m-3 p-5 text-3xl font-normal text-green"
        let child;
        if (this.state.createActive) {
            child = <SignUp />
        } else {
            child = <Login />
        }
        return (
            <div id="body">
                {/* calling the header */}
                <Header  activePage={'login'}/> 
            <div className="flex">
            <div className="mx-auto bg-white rounded-lg p-4 my-5 mt-16">
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
            </div>
            </div>
            </div>
            </div>
            <style jsx>{`
                #body {
                    background : #253335;
                }
            `}
            </style>
            </div>
        );
    }
}

export default withRouter(LoginPage);