import React, {Component} from 'react';
import Input from '../Input';
import FlexRow from '../FlexRow';
import googleIcon from '../../images/icons8-google.png';
import fbIcon from '../../images/icons8-facebook.png';

import {jobseekerRegisteration} from '../api_connections/CustomFunctions';

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
            serverURL: 'http://localhost:5000/portal/jsk/signup'
        }

        // binding the function
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    // handle change function
    onHandleChange(event){
        // console.log(event.target.value)
        this.setState({[event.target.name]: event.target.value });
    }

    // submit form handler
    onSubmitHandler = (event) => {
        event.preventDefault();
        // const details = {};
        // details["first_name"] = event.target.first_name.value;
        // details["last_name"] = event.target.last_name.value;
        // details["email"] = event.target.email.value;
        // details["password"] = event.target.password.value;
        // details["confirm_password"] = event.target.confirm_password.value;
        

        // new user object
        // const newUser = {
        //     first_name: this.state.first_name,
        //     last_name: this.state.last_name,
        //     email: this.state.email,
        //     password: this.state.password,
        // }

        // /* using the register function imported from the Custom Functions
        // and passing the user object as an argument */
        // jobseekerRegisteration(newUser)
        //     .then(res => {
        //         if (res) {
        //             if (res.status == "ok") {
        //             //    this.props.showHomepage();
        //             }
        //         }
        //     })
        //     .catch(err => {
        //         alert('error saving data')
        //     })
        

        // console.log(details);
        // if (details['password'].length < 6) {
        //     // <FlashMassage duration={5000} persistOnHover={true}>
        //     //     <p>Password must be greater than 6 characters</p>
        //     // </FlashMassage>;
            
        // } 
        // if (details['password'] !== details['confirm_password'] || 
        //         details['password'].length !== details['confirm_password'].length) {
        //     alert("Passwords Do not match");
        // } onSubmit={this.submitHandler}
        // alert("Everything checks out. You will now be redirected to ...");
    
    } 

    // action="http://localhost:5000/portal/jsk/signup" method="POST"

    render = () => {

        // setting the variables global
        const {first_name, last_name, email, password, confirm_password, serverURL} = this.state
        // onSubmit={this.onSubmitHandler}
        return (
            <form action={serverURL} method="POST">
                <h4 className="mt-8 text-sm">Start by <span className="text-red-dark">Creating</span> an Account (It's Free)</h4>
                
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