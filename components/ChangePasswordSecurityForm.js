/**
 * uses employer phone1 to 
 * implement our change 
 * password security check
 */

import Input from './Input';
import PropTypes from 'prop-types';
import '../static/styles.css';


class ChangePasswordSecurityForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "security_code" : "",
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    isValidCode = (code) => {
        return code === this.props.phone.slice(this.props.phone.length-4,this.props.phone.length);
    }

    securityCheckHandler = () => {
        if (this.isValidCode(this.state.security_code)) {
            this.props.onSuccess();
        } else {
            alert("Security Check NOT Successful");
        }
    }

    render = () => {
        return (
            <div className="max-w-xs mx-auto">
                <p className="text-center m-3 p-2" >Please enter the last four digits of the number below</p>
                <p className="text-center text-3xl text-black m-3 p-2">{this.props.phone.slice(0,this.props.phone.length-4)+"****"}</p>
                <Input name="security_code" value={this.state.security_code} onChange={this.handleChange} />
                <button className="bg-green py-4 px-8 bold text-lg mx-auto block rounded-lg text-center text-white" onClick={this.securityCheckHandler}>Confirm</button>
            </div>
        );
    }
}

ChangePasswordSecurityForm.propTypes = {
    phone:PropTypes.string.isRequired,
}

export default ChangePasswordSecurityForm;