
import React, {Component} from 'react';
import {Months,Days,Years,Districts} from '../constants';
import FlexRow from '../components/FlexRow';
import '../static/styles.css';
import Select from '../components/Select';
import SideNav from '../components/SideNav';
import Header from '../components/Header'
import Footer from '../components/Footer'
import { server } from '../config';
import fetch from 'isomorphic-unfetch';


function Input(props){
    let {className, ...otherProps} = props;
    let style = "w-full block focus:border-green-light rounded-lg bg-white border border-black hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:border-transparent "+className
    return (
        <input 
            {...otherProps} 
            display="block"
            className= {style}
            />
    );
}

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "firstname":"",
            "lastname":"",
            "name":"Zillions",
            "bio":"I'm a hitchhier from Stravromula beta",
            "industry":"Airlines",
            "town":"Kono",
            "city":"Night City",
            "district":"Freetown",
            "email1":"",
            "email2":"tango@zillions.com",
            "phone1":"+27778778778",
            "phone2":"+27887887887",
            "linkedIn":"zillions2xkkchskoseashkjfs.com",
            "facebook":"facebook.com/zillions",
            "instagram":"instagram.com/zillions",
            "website":"zillions.com",
            "address":"Zillion House, Park Avenue",
            "year" : 2001,
            "month":"July",
            "day":1,
        }

        this.stateUpdater = this.stateUpdater.bind(this);
    }

    stateUpdater = (data) => {
        this.setState({
            "firstname": data.userDetail.first_name,
            "lastname": data.userDetail.last_name,
            "email1": data.userDetail.email
        })
    }

    static async getInitialProps() {
        let data = '';
        // fetch request to get jobs
        fetch(`${server}/jsk/dashboard`).then(res => {
            // data =  res.json()
            if(res.status == 200){
                res.json()
                .then(re => {
                    console.log(re.userDetail.email)
                    // this.stateUpdater(re)
                    // this.setState({
                    //     "firstname": re.userDetail.first_name,
                    //     "lastname": re.userDetail.last_name,
                    //     "email1": re.userDetail.email
                    // })
                    
                })
                .catch(err => {
                    console.log(err)
                })
                
            }else if(res.status == 500){
                res.json()
                .then(err => Promise.reject(err))
                .catch(e => {
                    console.log(e.error);
                });
            }
        }).catch(err => console.log(err))
        
        return {
            profile: data.userDetails
        };
    }

    profileSaveHandler = () => {
        alert("Profile Saved or ...");
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    render = () => {
        
        return (
            <div>
            <Header />
            
            <div id="profile-body" className="flex justify-center">
            <div id="side-nav" className="mt-2 p-4" id="left">
                <SideNav />
            </div>
            <div className="max-w-lg bg-white mt-5 mb-5 p-4" id="right">
                <div id="profile-header">
                    <p className="text-center text-3xl block m-4 p-4">Personal Details</p>
                </div>
                <div id="MainFormHolder"  className=" mt-6 p-5">
                    <form onSubmit={this.profileSaveHandler} id="form">
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <label>First Name</label>
                                <Input name="firstname" type="text" value={this.state.firstname} onChange={this.handleInputChange} placeholder="Jane" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Last Name</label>
                                <Input name="lastname" type="text" value={this.state.lastname} onChange={this.handleInputChange} placeholder="Doe" required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Phone 1</label>
                                <Input name="phone1" type="text" value={this.state.phone1} onChange={this.handleInputChange} placeholder="+277777777777777" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Phone 2</label>
                                <Input name="phone2" pattern="\d" type="text" value={this.state.phone2} onChange={this.handleInputChange} placeholder="+27777777777777"/>
                            </div>
                        </FlexRow>

                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Primary Email</label>
                                <Input name="email1" type="email" value={this.state.email1} onChange={this.handleInputChange} placeholder="beeble@brox.com" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Secondary Email</label>
                                <Input name="email2" type="email" value={this.state.email2} onChange={this.handleInputChange} placeholder="me@you.com"/>
                            </div>
                        </FlexRow>

                        <FlexRow>
                            <div className="w-full px-3 mb-3">
                                <label>Address</label>
                                <Input className="mt-2" name="address" type="text" value={this.state.address} onChange={this.handleInputChange} placeholder="MyOrg Address, Town Road, Hill Side" required/>
                            </div>
                        </FlexRow>
                        
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Town</label>
                                <Input className="mt-2" name="town" type="text" value={this.state.town} onChange={this.handleInputChange} placeholder="Town" required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3 bg-light-grey">
                                <label>Districts</label>
                                <Select options={Districts} onChange={this.handleInputChange} form="form" value={this.state.district} name="district"  required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-1/2 px-3 mb-3">
                            <label>Nationality</label>
                            <Select className="mt-2" options={["Ghana","Nigeria","Sierra Leone"]} onChange={this.handleInputChange} form="form" value={this.state.nationality} name="nationality"  required/>
                            </div>
                            <div className="w-1/2 px-3 mb-3">
                                <label>Gender</label>
                                <Select className="mt-2" options={["Male","Female"]} onChange={this.handleInputChange} form="form" value={this.state.gender} name="gender"  required/>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <div className="w-full px-3 mb-3">
                                <label>Birthday</label>
                                <div className="flex flex-row mt-2 justify-between">
                                    <Select className="mr-10" options={Months} name="month" onChange={this.handleInputChange} form="form" value={this.state.month} name="month"  required/>
                                    <Select className="mr-10" options={Days} onChange={this.handleInputChange} form="form" value={this.state.day} name="day"  required/>
                                    <Select options={Years} onChange={this.handleInputChange} form="form" value={this.state.year} name="year"  required/>
                                </div>
                            </div>
                        </FlexRow>
                        <FlexRow>
                            <label>About Me</label>
                            <textarea name="bio" value={this.state.bio} onChange={this.handleInputChange} placeholder="Add a short description about you" className="w-full border border-black py-3 px-3 mb-6 focus:border-transparent focus:border-green-light focus:outline-none focus:bg-white" rows="7"></textarea>
                        </FlexRow>
                        <FlexRow>
                            <div className="mx-auto">
                                <input type="submit" value="Save" className="hover:bg-green-darker w-full bg-green-darkest text-lg rounded-full text-white p-4 mx-12 font-bold"/>
                            </div>
                        </FlexRow>
                    </form>
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

                    label{
                        margin-bottom:1rem;
                        display:block;
                    }

                    #left {
                        flex-grow:1,
                        flex-shrink:1
                        flex-basis: inherit;
                       
                    }

                    #right {
                        flex-grow:1,
                        flex-shrink:3
                        flex-basis: inherit;

                        min-width:50rem;
                    }
                `}
                </style>
                
            </div>
            <Footer />
            </div>
            
        );
    }
}


// const profile = {
//     "firstname":"Kango",
//     "lastname":"Nona",
//     "name":"Zillions",
//     "bio":"I'm a hitchhier from Stravromula beta",
//     "industry":"Airlines",
//     "town":"Kono",
//     "city":"Night City",
//     "district":"Freetown",
//     "email1":"jango@zillions.com",
//     "email2":"tango@zillions.com",
//     "phone1":"+27778778778",
//     "phone2":"+27887887887",
//     "linkedIn":"zillions2xkkchskoseashkjfs.com",
//     "facebook":"facebook.com/zillions",
//     "instagram":"instagram.com/zillions",
//     "website":"zillions.com",
//     "address":"Zillion House, Park Avenue",
//     "year" : 2001,
//     "month":"July",
//     "day":1,
// }

// Profile.getInitialProps = async function() {
//     // fetch request to get jobs
//     const result = await fetch(`${server}/jsk/dashboard`);
//     const data = await result.json();
    
//     return {
//       profile: data.userDetails
//     };
//   };

