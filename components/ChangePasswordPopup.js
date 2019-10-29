/*
This will house the 
change password form as well 
as its ...
*/

import React from 'react';
import PasswordChanger from './PasswordChanger';
import Popup from "reactjs-popup";
import PropTypes from 'prop-types';

//TODO : Not generic enough
function ModalContainer(props) {
    return (
        <>
            <a className="close" onClick={props.close}>
                &times;
            </a>
            <props.main close={props.close} phone={props.phone}  />
            <style jsx>{`
              .close {
                cursor: pointer;
                position: absolute;
                display: block;
                padding: 2px 5px;
                line-height: 20px;
                right: -10px;
                top: -10px;
                font-size: 24px;
                background: #ffffff;
                border-radius: 18px;
                border: 1px solid #cfcece;
              }
            `}
            </style>
        </>
    );
}


export class ChangePasswordPopup extends React.Component {
    render = () => {
        return (
            <Popup className="mx-auto" modal open={this.props.open} onClose={this.props.onClose}>
                {close => <ModalContainer main={PasswordChanger} close={close} phone={this.props.phone} />}
            </Popup>
        );
    }
}

ChangePasswordPopup.propType = {
    phone : PropTypes.string.isRequired,
}