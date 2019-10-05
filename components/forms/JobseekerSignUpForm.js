import React, {Component} from 'react';
import Input from '../Input';
import FlexRow from '../FlexRow';
import googleIcon from '../../images/icons8-google.png';
import fbIcon from '../../images/icons8-facebook.png';

import {jobseekerRegisteration} from '../api_connections/CustomFunctions';

let fontStyle = {
    fontFamily:"Proxima nova",
    fontSize:"30px"
}

export default class JobSeekerSignUp extends Component {

    constructor() {
        super()
        // defining the state keys
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
            flashMessage: false,
            errorMessage: ''
        }

        // binding the function
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
        // this.onCloseNotification = this.onCloseNotification.bind(this)
    }

    // handle change function
    onHandleChange(event){
        // console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value });
    }

    // submit form handler
    onSubmitHandler = (event) => {
        event.preventDefault();

        // new user object
        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
        }

        // /* using the register function imported from the Custom Functions
        // and passing the user object as an argument */

        // console.log(details);
        if (this.state.password.length < 6 && this.state.confirm_password.length < 6) {
            setTimeout(()=> this.setState({
                flashMessage: true,
                errorMessage: 'Password must be more than 6 characters'
            }), 3000)
        } else if(this.state.password != this.state.confirm_password) {
            setTimeout(()=> this.setState({
                flashMessage: true,
                errorMessage: 'Passwords do not match'
            }), 3000)
            
        }else{
            jobseekerRegisteration(newUser)
                .then(res => {})
                .catch(err => {
                    alert('error saving data')
                })
        }
    
    } 


    render = () => {

        // setting the variables global
        const {first_name, last_name, email, password, confirm_password, errorMessage} = this.state

        return (
            <form onSubmit={this.onSubmitHandler} method="POST">
                <h4 style={fontStyle} className="mt-8 text-xs">Start by <span className="text-red-dark">Creating</span> an Account (It's Free)</h4>
                
                {this.state.flashMessage? 
                    (
                        <div className="bg-red-lightest border border-red-light text-red-dark px-4 py-3 mt-6 rounded relative" role="alert">
                            <strong className="font-bold">Sorry! </strong>
                            <span className="block sm:inline">{ errorMessage }</span>
                        </div>
                    ) : ''
                
                }
                
                <FlexRow>
                    <div className = "flex mt-8 mx-6" > 
                        {/* google create button */ } 
                        <div className="w-64 ml-6">
                            <div className="rounded-full shadow px-3 py-2 flex items-center border-2 border-green-light focus:border-green-light cursor-pointer">
                                <p className="ml-5 text-xs font-fira">Create with Google </p>
                                <img src={googleIcon} className="ml-16 w-6 h-6" /> 
                            </div> 
                        </div> 
                        {/* facebook create button */ } 
                        <div className="w-64 ml-6">
                            <div className="rounded-full shadow px-3 py-2 flex items-center border-2 border-green-light focus:border-green-light cursor-pointer">
                                <p className="ml-5 text-xs font-fira">Create with LinkedIn</p> 
                                <img src={fbIcon} className="ml-16 w-6 h-6" />
                            </div> 
                        </div> 
                    </div> 
                </FlexRow>
                <div className = "flex my-8" >
                    <hr className="bg-green-darker mx-2 w-1/2" />
                        <span className="mx-1"> Or </span> 
                    <hr className="bg-green-darker mx-2 w-1/2" />
                </div> 
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="first_name" value={first_name} 
                            type="text" placeholder="First name" 
                            onChange={this.onHandleChange} required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="last_name" value={last_name} 
                            type="text" placeholder="Last name" 
                            onChange={this.onHandleChange} required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3 mb-3">
                        <Input name="email" value={email} 
                            type="text" placeholder="Email Address" 
                            onChange={this.onHandleChange} required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="password" value={password} 
                            type="password" placeholder="Password" 
                            onChange={this.onHandleChange} required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="confirm_password" value={confirm_password}  
                            type="password" placeholder="Confirm Password" 
                            onChange={this.onHandleChange} required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <p className="mb-6 mx-auto">By clicking Create, you agree to our <a href="#" className="no-underline text-red-dark">Terms of Use</a> and our <a href="#" className="no-underline text-red-dark">Privacy Policy</a>.</p>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3">
                        <input type="submit" value="Create" className="block w-full bg-green-darker text-lg text-white rounded-full p-4 font-bold hover:bg-red-dark cursor-pointer "/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <p className="mb-6 mx-auto">Already have an account? <a href="/login" className="no-underline text-red-dark">login</a></p>
                </FlexRow>
            </form>
        );
    }
}