import "../static/styles.css";
import UserMenu from "./UserMenu";
import PropTypes from "prop-types";
import Link from "next/link";

import { DefaultImage, DefaultUsername } from "../constants";

const Avatar = props => {
  return (
    <div className="w-12 h-12 p-1">
      <img
        className="rounded-lg object-cover object-center"
        src={props.image}
      />
    </div>
  );
};

Avatar.propTypes = {
  image: PropTypes.string.isRequired
};

const UserStatus = props => {
  const name = props.name || DefaultUsername;
  const image = props.image || DefaultImage;
  console.log(image, name);
  return (
    <div className="flex flex-row items-baseline h-12 rounded-lg">
      <div className="my-auto text-xl py-4">
        {name[0].toUpperCase() + name.substring(1, name.length).toLowerCase()}
      </div>
      <Avatar image={image} />
      <UserMenu />
      <style>
        {`
            div > button:hover {
                background-color:"#253335"
            }
        `}
      </style>
    </div>
  );
};

UserStatus.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string
};

export default UserStatus;
