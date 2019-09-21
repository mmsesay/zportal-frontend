import React from 'react';
import Input from './Input';
import Link from 'next/link';
import FlexRow from './FlexRow';

class Login extends React.Component {

    state = {
        processing : false
    }

    //does form validation for credentials
    isValid = (credentials) => {
        return true
    }

    login = () => {
        //This will handle api interaction
        //and subsequent rerouting or error displaying
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.setState({processing:true});
        let credentials = {}
        credentials["email"] = event.target.email.value;
        credentials["password"] = event.target.password.value;
        credentials["remember_me"] = event.target.remember_me.value;

        if (credentials["password"].length < 6) {
            alert("Invalid Password Length");
        }

        return
    }

    render = () => {
        return (
            <form onSubmit={this.submitHandler}>
                <FlexRow>
                    <Input name="email" type="email" placeholder="Email" required="required"/>
                </FlexRow>
                <FlexRow>
                    <Input name="password" placeholder="Password" type="password" required="required"/>
                </FlexRow>
                <FlexRow>
                    <input type="checkbox" name="remember_me"/> 
                    <span className="font-bold">Keep me signed in on this device</span>
                </FlexRow>
                <FlexRow>
                    <p className="text-gray-900 my-4 text-center">By clicking Login you agree to our <Link href="#"><a href="#">Terms of use</a></Link> and <Link href="#"><a href="#"> Privacy Policy</a></Link></p></FlexRow>
                <input type="submit" value="Login" className="min-w-full my-4 shadow hover:bg-red bg-green-darker font-bold text-lg hover:bg-green-400 text-white px-6 py-4 rounded-full"/>
                <div className="text-center appearance-none text-red">
                <Link>
                    <a href="#" className="block mt-3">Forgot Your Password?</a>
                </Link>
                </div>
            </form>
        );
    }
}

export default Login