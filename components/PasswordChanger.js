/**
 * Uses other components to implement our password
 * changing policy
 */

import PasswordResetForm from "./ChangePasswordForm"
import PasswordResetSecurityForm from "./ChangePasswordSecurityForm"
import PropTypes from 'prop-types';

class PasswordChanger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "securityCheckSuccessful":false
        }
    }

    onPasswordChangeSuccess = (new_password) => {
        //handle api interaction to ensure successful change of password
        //use ui scheme to inform the user of new password change success

        alert("Password Changed Successfully");
        this.props.close();
    }

    onSecurityCheckSuccess = () => {
        this.setState({...this.state, securityCheckSuccessful:true});
    }

    render = () => {
        const child = this.state.securityCheckSuccessful ? <PasswordResetForm onSuccess={this.onPasswordChangeSuccess} /> : <PasswordResetSecurityForm phone={this.props.phone} onSuccess={this.onSecurityCheckSuccess} />;
        return (
            <div className="max-w-xs mx-auto">
                {child}
            </div>
        )
    }
}

PasswordChanger.propType = {
    phone:PropTypes.string.isRequired,
    close:PropTypes.func.isRequired,
}

export default PasswordChanger;