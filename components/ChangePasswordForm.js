import Input from './Input';
import PropTypes from 'prop-types';
import '../static/styles.css';



class ChangePasswordForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "password":"",
            "repeat_password":""
        }
    }

    changePasswordHandler = () => {
        if (this.state.password === this.state.repeat_password) {
            this.props.onSuccess(this.state.password);
            this.setState({password:"",repeat_password:""});
        } else {
            alert("Passwords do not match");
        }
    }

    changeHandler = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    render = () => {
        return (
            <div className="max-w-xs mx-auto">
                <p className="text-center text-2xl m-2 p-2">Change Password</p>
                <Input type="password" placeholder="New Password" name="password" value={this.state.password} onChange={this.changeHandler} />
                <Input type="password" placeholder="Repeat Password" name="repeat_password" value={this.state.repeat_password} onChange={this.changeHandler} />
                <button className="bg-green m-2 py-4 px-8 bold text-lg mx-auto block rounded-lg text-center text-white" onClick={this.changePasswordHandler}>Change Password</button>
            </div>
        );
    }
}

ChangePasswordForm.propTypes = {
    onSuccess:PropTypes.func.isRequired,
}

export default ChangePasswordForm;