import React from 'react';
import Input from '../Input';
import FlexRow from '../FlexRow';
import googleIcon from '../../images/icons8-google.png'
import fbIcon from '../../images/icons8-facebook.png'
import useStyles from '../styles'
// import {jobseekerRegisteration} from '../api_connections/CustomFunctions'

let fontStyle = {
    fontFamily:"Proxima nova",
    fontSize:"30px"
}

class JobSeekerSignIn extends React.Component {

    constructor() {
        super()
        // defining the state keys
        this.state = {
            email: '',
            password: '',
            token: '',
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

        // new user object
        const logUser = {
            email: this.state.email,
            password: this.state.password,
            token: this.props.token
        }

        // callback from parent
        this.props.callbackFromParent(logUser);
    }

    // onSubmit={this.submitHandler}
    

    render = () => {

        // global variables
        const { email, password } = this.state

        return (
            <form onSubmit={this.onSubmitHandler} method="POST">
                <h4 style={fontStyle} className="mt-8 text-sm">Login (It's Free)</h4>

                <FlexRow>
                    <div className = "flex mt-8 mx-2" > 
                        {/* google create button */ } 
                        <div className="w-20 ml-1">
                            <div className="rounded-full shadow px-3 py-2 flex items-center border-2 border-green-light focus:border-green-light cursor-pointer">
                                <p className="ml-5 text-xs font-fira">Login with Google </p>
                                <img src={googleIcon} className="ml-12 w-6 h-6" /> 
                            </div> 
                        </div> 
                        {/* facebook create button */ } 
                        <div className="w-20 ml-1">
                            <div className="rounded-full shadow px-3 py-2 flex items-center border-2 border-green-light focus:border-green-light cursor-pointer">
                                <p className="ml-5 text-xs font-fira">Login with LinkedIn</p> 
                                <img src={fbIcon} className="ml-12 w-6 h-6" />
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
                    <div className="w-full px-3 mb-3">
                        <Input name="email" value={email} 
                            onChange={this.onHandleChange}
                            type="text" placeholder="Email Address" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3 mb-3">
                        <Input name="password" value={password}
                            onChange={this.onHandleChange}
                            type="password" placeholder="Password" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <input type="checkbox" className="ml-4" name="remember_me"/> 
                    <span className="ml-4 font-bold">Keep me signed in on this device</span>
                </FlexRow>
                <FlexRow>
                    <p className="mb-6 mx-auto text-sm">By clicking Create, you agree to our <a href="#" className="no-underline text-red-dark">Terms of Use</a> and our <a href="#" className="no-underline text-red-dark">Privacy Policy</a>.</p>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3">
                        <input type="submit" value="Login" 
                        className="block w-full bg-green-darker text-lg text-white rounded-full p-4 font-bold hover:bg-red
                        cursor-pointer"/>
                    </div>
                </FlexRow>
                <div className="mx-auto">
                    <p className="ml-16">Don&apos;t have an account? <a href="/create" className="no-underline text-red-dark">Create</a></p>
                    <a href="#" className="ml-16 mb-4 block mt-3 no-underline text-red-dark">Forgot Your Password?</a>
                </div>
            </form>
        );
    }
}

export default JobSeekerSignIn