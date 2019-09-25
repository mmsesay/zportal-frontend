import React, {Component} from 'react';
import Input from './Input';
import FlexRow from './FlexRow';
import googleIcon from '../images/icons8-google.png'
import fbIcon from '../images/icons8-facebook.png'

let fontStyle = {
    fontFamily:"Proxima nova",
    fontSize:"30px"
}

export default class JobSeekerSignUp extends Component {

    constructor() {
        super()
        this.state = {
            // email: '',
            // password: '',
            // firstName: '',
            // lastName: '',
            signupURL: 'http://localhost:5000/portal/jsk/signup'
        }

        // this.onChangeHandler = this.onChangeHandler.bind(this)
        // this.onSubmitHandler = this.onSubmitHandler.bind(this)
    }

    submitHandler = (event) => {
        alert("Submit Handled!!!");
        event.preventDefault();
        const details = {};
        details["first_name"] = event.target.first_name.value;
        details["last_name"] = event.target.last_name.value;
        details["email"] = event.target.email.value;
        details["password"] = event.target.password.value;
        details["confirm_password"] = event.target.confirm_password.value;
        
        // console.log(details);
        if (details['password'].length < 6) {
            alert("Password does not meet minimum character requirement of 6");
        } 
        // if (details['password'] !== details['confirm_password'] || 
        //         details['password'].length !== details['confirm_password'].length) {
        //     alert("Passwords Do not match");
        // } onSubmit={this.submitHandler}
        // alert("Everything checks out. You will now be redirected to ...");
    
    }

    render = () => {
        return (
            <form action="http://localhost:5000/portal/jsk/signup" method="POST">
                <h4 style={fontStyle} className="mt-8 text-sm">Start by <span className="text-red-dark">Creating</span> an Account (It's Free)</h4>

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
                        <Input name="first_name" type="text" placeholder="First name" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="last_name" type="text" placeholder="Last name" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3 mb-3">
                        <Input name="email" type="text" placeholder="Email Address" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="password" type="password" placeholder="Password" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="confirm_password" type="password" placeholder="Confirm Password" required/>
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
            </form>
        );
    }
}