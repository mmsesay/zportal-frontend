import React from "react";
import { Months, Days, Years, Districts } from "../constants";
import FlexRow from "../components/FlexRow";
import "../static/styles.css";
import Select from "../components/Select";
import SideNav from "../components/SideNav";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.props.profile
    };
    console.log(this.props.profile);
  }

  profileSaveHandler = () => {
    alert("Profile Saved or ...");
  };

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  render = () => {
    return (
      <div id="profile-body" className="flex justify-center h-full">
        <div className="mt-2 p-4" id="left">
          <SideNav activeKey={this.props.activeKey} />
        </div>
        <div className="max-w-lg bg-white mt-5 mb-5 p-4" id="right">
          <div id="profile-header">
            <p className="text-center text-3xl block m-4 p-4">
              {this.props.title}
            </p>
          </div>
          <div id="MainFormHolder" className=" mt-3 p-2">
            {this.props.children}
          </div>
        </div>
        <style jsx>
          {`
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
                        min-height:100vh;
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
    );
  };
}

export default Layout;
