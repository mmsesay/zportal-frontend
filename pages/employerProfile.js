/** 
 * This form is intended to help edit prior information
 * It will thus need to get access to some prior information
 * Set various form fields to default values in that prior info
 * Send new and updated info to the server
 * 
 * How to deal with that data is rather interesting
 * We could simply use fetch from isomorphicunfetch to 
 * set initial data for the page - next solution
 * that would work al right but what if the user moves to a different page
 * and then comes back. That would require multiple calls to the server
 * A better solution would be to use an application state management tool like
 * redux. With this, data will be persisted to the store and accessed between
 * page movements. 
 * 
 * We know so little about the server and api endpoints at the moment
 * We also have no idea if we may use application state management tools or not
 * 
 * 
 * In the immediate term however, a simple but inefficient next based solution of providing 
 * data for the page would or should do
*/


import React from 'react';
import {Industries, Districts} from '../constants';
import FlexRow from '../components/FlexRow';
import Input from '../components/Input';
import '../static/styles.css';
import ImageUpLoader from '../components/ImageUpLoader';
import Link from 'next/link';


const Select = (props) => {
    return (
        <select {...props} className="w-full focus:border-green-light bg-grey-darker border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-transparent">
            {props.options.map((option)=><option key={option}>{option}</option>)}
        </select>
    ); 
}

class PremiumButton extends React.Component {
    render = () => {
        return (
            <button className="mx-auto bg-orange text-white rounded-lg text-lg p-4" {...this.props}>
                    Premium Membership
                    <svg className="h-4 w-4 ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M14.83 4H20v6h-1v10H1V10H0V4h5.17A3 3 0 0 1 10 .76 3 3 0 0 1 14.83 4zM8 10H3v8h5v-8zm4 0v8h5v-8h-5zM8 6H2v2h6V6zm4 0v2h6V6h-6zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm4 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                    </svg>
            </button>
        );
    }
}



class Profile extends React.Component {

    state = {
        "name":"Really Wild Stuff Co Ltd",
        "bio":"tripple x",
        "industry":"Airlines",
        "town":"Stravromula beta",
        "city":"night city",
        "district":"Kono",
        "email1":"jango@reallywildstuff.com",
        "email2":"tango@reallywildstuff.com",
        "phone1":"+27 778 778 778",
        "phone2":"+27 887 887 887",
        "linkedIn":"reallywildstuf2xkkchskoseashkjfs.com",
        "facebook":"Really Wild Stuff",
        "instagram":"Really Wild Stuff",
        "website":"reallywildstuff.com",
        "address":"Bleaker Street House No. Buy You Own House.",
        "formOpacity":0.6,
    }

    componentDidMount() {
        this.disableFormFields(document.getElementById("form"));
    }

    


    profileSaveHandler = () => {
        this.disableFormFields(document.getElementById("form"));
        alert("Profile Saved or ...");
    }

    changePasswordHandler = () => {
        alert("Change Password Clicked");
    }

    
    disableFormFields = (form) => {
        let i;
        for (i=0;i<form.elements.length;i++) {
            let element = form.elements[i]
            element.disabled = true;
            // if (!(element.name in Object.keys(this.state))) {continue}
            // element.defaultValue = this.state[element.name];
        }
    }

    enableFormFields = (form) => {
        let i;
        for (i=0;i<form.elements.length;i++) {
            form.elements[i].disabled = false;
        }
    }

    handleInputChange = (event) => {
        alert("An input changed");
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }


    editHandler = () => {
        this.setState({...this.state,formOpacity:1});
        this.enableFormFields(document.getElementById("form"));
    }

    render = () => {
        const opacity = this.state.formOpacity;
        return (
            <div id="profile-body">
            <div className="max-w-lg bg-white mx-auto p-4">
                <div id="profile-header" className="flex justify-between">
                    <button className="py-3 px-4 mb-3 bg-green-darker rounded-lg text-white" onClick={this.changePasswordHandler}>change password</button>
                    <button className="py-3 px-5 mb-3 rounded-lg bg-green-darker text-white" onClick={this.editHandler}>Edit</button>
                </div>
                <div className="flex flex-row" style={{"opacity":opacity}}>
                    <div id="logo" className="mt-2 p-4">
                        <ImageUpLoader form="form" header="Upload Logo" name="logo" />
                    </div>
                    <div id="MainFormHolder"  className="mt-6 flex-1">
                        <form onSubmit={this.profileSaveHandler} id="form">
                        <FlexRow>
                            <div className="w-full px-3 mb-3 border-black">
                                <Input name="name" type="text" value={this.state.name} placeholder="Company name" onChange={this.handleInputChange} required/>
                            </div>
                        </FlexRow>

                        <FlexRow>
                            <div className="w-full px-3 mb-3 mx-auto max-w-sm">
                                <Select options={Industries} form="form" onChange={this.handleInputChange} value={this.state.industry} placeholder="Org Industry" name="industry"  required/>
                            </div>
                        </FlexRow>

                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="email1" type="text" value={this.state.email1} onChange={this.handleInputChange} placeholder="jobs@myorg.com" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="email2" type="text" value={this.state.email2} onChange={this.handleInputChange} placeholder="recruit@myorg.com" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="phone1" type="text" value={this.state.phone1} onChange={this.handleInputChange} placeholder="+277777777777777" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="phone2" type="text" value={this.state.phone2} onChange={this.handleInputChange} placeholder="+27777777777777" required/>
                            </div>
                        </FlexRow>

                        <FlexRow>
                            <div className="w-full px-3 mb-3">
                                <Input name="address" type="text" value={this.state.address} onChange={this.handleInputChange} placeholder="MyOrg Address, Town Road, Hill Side" required/>
                            </div>
                        </FlexRow>
                        
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="town" type="text" value={this.state.town} onChange={this.handleInputChange} placeholder="Org Town" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3 bg-light-grey">
                                <Select options={Districts} onChange={this.handleInputChange} form="form" value={this.state.district} name="district"  required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="website" value={this.state.website} onChange={this.handleInputChange} type="text" placeholder="www.myorgsite.com" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="linkedIn" value={this.state.linkedIn} onChange={this.handleInputChange} type="text" placeholder="myorg.linkedln.com" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="instagram" value={this.state.instagram} onChange={this.handleInputChange} type="text" placeholder="myorg.instagram.com" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <Input name="facebook" value={this.state.facebook} onChange={this.handleInputChange} type="text" placeholder="myorg.facebook.com" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <Link href="/mockPremium">
                                <PremiumButton />
                            </Link>
                        </FlexRow>

                        <FlexRow>
                            <textarea name="bio" value={this.state.bio} onChange={this.handleInputChange} placeholder="Company Details" className="w-full border border-black py-3 px-3 mb-6 focus:border-transparent focus:border-green-light focus:outline-none focus:bg-white" rows="7"></textarea>
                        </FlexRow>
                        <FlexRow>
                            <div className="mx-auto">
                                <input type="submit" value="Save" className="block w-full bg-green-darker text-lg text-white p-4 font-bold hover:bg-red"/>
                            </div>
                        </FlexRow>
                        </form>
                    </div>
                </div>
                </div>
                <style jsx>{`
                    a {
                        text-decoration:none;
                        text-decoration-color: none;
                        color: red
                    }
                    #profile-header {
                        border-bottom : 1px solid black;
                    }

                    #profile-body {
                        background-color:grey;
                    }  
                `}
                </style>
            </div>
        );
    }
}



export default Profile;

//TODO
//Styling Header
//Styling The Premium Component or creating a special one
//Contemplate data hooking
