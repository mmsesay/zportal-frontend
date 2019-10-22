import React, {Component} from 'react';
import Input from '../Input';
import FlexRow from '../FlexRow';
import googleIcon from '../../images/icons8-google.png';
import fbIcon from '../../images/icons8-facebook.png';

// import {jobseekerRegisteration} from '../api_connections/CustomFunctions';

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

        // callback from parent
        this.props.callbackFromParent(newUser);

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
            // jobseekerRegisteration(newUser)
            //     .then(res => {})
            //     .catch(err => {
            //         alert('error saving data')
            //     })
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
                                <span className="ml-16 w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512">
                                        <path d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z" fill="#fbbb00"/><path d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z" fill="#518ef8"/><path d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z" fill="#28b446"/><path d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z" fill="#f14336"/>
                                    </svg>
                                </span>
                            </div> 
                        </div> 
                        {/* linkedIn create button */ } 
                        <div className="w-64 ml-6">
                            <div className="rounded-full shadow px-3 py-2 flex items-center border-2 border-green-light focus:border-green-light cursor-pointer">
                                <p className="ml-5 text-xs font-fira">Create with LinkedIn</p>
                                <span className="ml-16 w-6 h-6">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 112.196 112.196">
                                        <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9"/>
                                        <path d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z"
                                        fill="#f1f2f2"/>
                                    </svg>
                                </span>
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