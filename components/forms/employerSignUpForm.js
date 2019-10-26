import React from 'react';
import Input from '../Input';
import FlexRow from '../FlexRow';
import Select from '../Select';
import {Industries, Districts} from '../../constants';

const TabHeader = (props) => {
    const activeStyle = "m-2 p-4 text-3xl text-red font-bold font-extrabold border-b-4";
    const baseStyle = "m-2 p-4 text-3xl font-normal text-green";
    const style = props.active ? activeStyle : baseStyle;
    return (
        <a href="#" className={style}>{props.title}</a>
    );
}

class SignUp extends React.Component {

    constructor(props) {
        super(props)
        // defining the state keys
        this.state = {
            first_name: '',
            last_name: '',
            jobtitle: '',
            phone: '',
            company_name: '',
            email: '',
            address: '',
            password: '',
            confirm_password: '',
            industry: '',
            city: '',
            district: '',
            social: '',
            website: '',
            bio: '',
            social_media_link: '',
            website_link: '',
            form_is_valid: false
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

    onSubmitHandler = (event) => {
       
        event.preventDefault();

         // new user object
        const newOrganization = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            jobtitle: this.state.jobtitle,
            phone: this.state.phone,
            company_name: this.state.company_name,
            email: this.state.email,
            address: this.state.address,
            password: this.state.password,
            confirm_password: this.state.confirm_password,
            industry: this.state.industry,
            city: this.state.city,
            district: this.state.district,
            bio: this.state.bio,
            // social_media_link: this.state.social_media_link,
            // website_link: this.state.website_link,
        }

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
            // this.setState({
            //     form_is_valid: !this.state.form_is_valid
            // })
            // organizationRegistration(newOrganization)
                // .then(res => {})
                // .catch(err => {
                //     alert('error saving data')
                // })
        }

        // callback from parent
        this.props.callbackFromParent(newOrganization);
    }

    render = () => {
        
        const {first_name, last_name, jobtitle, phone, company_name, email, 
            address, city, password, confirm_password, industry, district, 
            social_media_link, website_link, bio, serverURL} = this.state
        return (
            <form onSubmit={this.onSubmitHandler} method="POST">
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="first_name" value={first_name}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="First name" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="last_name" value={last_name}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Last name" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="jobtitle" value={jobtitle}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Job title" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="phone" value={phone}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Tel #" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3 mb-3">
                        <Input name="company_name" value={company_name}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Company name" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="email" value={email}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Email" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Select options={Industries} values={industry} 
                        onChange={this.onHandleChange} 
                        placeholder="Org Industry" name="industry" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="password" value={password}
                        type="password" onChange={this.onHandleChange} 
                        placeholder="Password" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="confirm_password" value={confirm_password}
                        type="password" onChange={this.onHandleChange} 
                        placeholder="Confirm Password" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3 mb-3">
                        <Input name="address" value={address}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Address" required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="city" value={city}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="City" required/>
                    </div>
                    <div className="w-1/2 px-3 mb-6">
                        <Select options={Districts} value={district} onChange={this.onHandleChange} 
                        placeholder="District" name="district"  required/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="social_media_link" value={social_media_link}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Social Link"/>
                    </div>
                    <div className="w-1/2 px-3 mb-3">
                        <Input name="website_link" value={website_link}
                        type="text" onChange={this.onHandleChange} 
                        placeholder="Website link"/>
                    </div>
                </FlexRow>
                <FlexRow>
                    <textarea name="bio" value={bio}
                    type="text" onChange={this.onHandleChange} 
                    placeholder="Write a short Description about your company" className="w-full border border-black rounded-lg py-3 px-3 mb-6 focus:border-transparent focus:border-green-light focus:outline-none focus:bg-white" rows="7"></textarea>
                </FlexRow>
                <FlexRow>
                    <p className="mb-6 no-underline">By clicking Create, you agree to our <a href="#" className="no-underline text-red-dark">Terms of Use</a> and our <a href="#" className="no-underline text-red-dark">Privacy Policy</a>.</p>
                </FlexRow>
                <FlexRow>
                    <div className="w-full px-3">
                        <input type="submit" value="Create" 
                        className="block w-full bg-green-darker text-lg text-white rounded-full p-4 font-bold hover:bg-red cursor-pointer"/>
                    </div>
                </FlexRow>
                <div className="mx-auto">
                    <p className="ml-16">Already have an account? <a href="/create" className="no-underline text-red-dark">Login</a></p>
                </div>
            </form>
        );
    }
}

export default SignUp