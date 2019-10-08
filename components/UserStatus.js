import '../static/styles.css';
import UserMenu from './UserMenu';
import PropTypes from 'prop-types';

import {DefaultImage, DefaultUsername} from '../constants';


const Avatar = (props) => {
    return (
        <div>
            <img className="rounded-lg object-cover object-center w-12" src={props.image} />
        </div>
    )
}

Avatar.propTypes = {
    image:PropTypes.string.isRequired,
}

const UserStatus = (props) => {
    const name = props.name || DefaultUsername;
    const image = props.image || DefaultImage;
    console.log(image,name)
    return (
        <div className="flex flex-row items-baseline h-12 rounded-lg">
            <div className="my-auto text-2xl">
                {name[0].toUpperCase()+name.substring(1,name.length).toLowerCase()} 
            </div>
            <Avatar image={image} />
            <UserMenu />
        </div>
    );
}

UserStatus.propTypes = {
    name:PropTypes.string,
    image:PropTypes.string,
}

export default UserStatus;