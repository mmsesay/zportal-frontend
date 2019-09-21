import React from 'react';
import Input from './Input';
import FlexRow from './FlexRow';
import Select from './Select';
import {Industries, Districts} from '../constants';

class SignUp extends React.Component {

    submitHandler = (event) => {
        alert("Submit Handled!!!");
        event.preventDefault();
        const details = {};
        details["firstname"] = event.target.firstname.value;
        details["lastname"] = event.target.lastname.value;
        details["jobtitle"] = event.target.jobtitle.value;
        details["phone"] = event.target.phone.value;
        details["company_name"] = event.target.company_name.value;
        details["email"] = event.target.email.value;
        details["password"] = event.target.password.value;
        details["confirm_password"] = event.target.confirm_password.value;
        details["district"] = event.target.district.value;
        details["social"] = event.target.social.value;
        details["website"] = event.target.website.value;
        details["bio"] = event.target.bio.value;
        console.log(details);
        if (details['password'].length < 6) {
            alert("Password does not meet minimum character requirement of 6");
        } 
        if (details['password'] !== details['confirm_password'] || 
                details['password'].length !== details['confirm_password'].length) {
            alert("Passwords Do not match");
        } 
        alert("Everything checks out. You will now be redirected to ...");
    }

    render = () => {
        return (
            <form onSubmit={this.submitHandler}>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="firstname" type="text" placeholder="First name" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="lastname" type="text" placeholder="Last name" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="jobtitle" type="text" placeholder="Job title" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="phone" type="text" placeholder="Tel #" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3 mb-3">
                        <Input name="company_name" type="text" placeholder="Company name" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="email" type="text" placeholder="Email" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Select options={Industries} placeholder="Org Industry" name="industry"  required/>
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
                    <div className="w-full px-3 mb-3">
                        <Input name="address" type="text" placeholder="Address" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="city" type="text" placeholder="City" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-6">
                        <Select options={Districts} placeholder="District" name="district"  required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="social" type="text" placeholder="Social Link"/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="website" type="text" placeholder="Website link"/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <textarea name="bio" placeholder="Write a short Description about your company" className="w-full border border-black rounded-lg py-3 px-3 mb-6 focus:border-transparent focus:border-green-light focus:outline-none focus:bg-white" rows="7"></textarea>
                </FlexRow>
                <FlexRow>
                    <p className="mb-6">By clicking Create, you agree to our <a href="#">Terms of Use</a> and our <a href="#">Privacy Policy</a>.</p>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3">
                        <input type="submit" value="Create" className="block w-full bg-green-darker text-lg text-white rounded-full p-4 font-bold hover:bg-red"/>
                    </div>
                </FlexRow>
            </form>
        );
    }
}

export default SignUp