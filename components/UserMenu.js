import '../static/styles.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

    
const MenuItem = (props) => {
    
    return (
        
        <div className="cursor-pointer mb-1 p-1 bg-green-darkest hover:bg-red-darker text-white">
            <div id="title" className="flex-1 p-1">
                <Link href={props.url}>
                    <a>{props.title}</a>
                </Link>
            </div>

            <style jsx>{`
                a {
                    text-decoration:none;
                    color:white;
                }
            `}</style>
        </div>
    );
}

MenuItem.propTypes = {
    title:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}

class UserMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuDisplay:"hidden",
        }
    }

    toggleMenu = () => {
        const display = this.state.menuDisplay === "hidden" ? "block" : "hidden"
        this.setState({menuDisplay:display})
    }

    render = () => {
        return (
            <div className="h-12">
                <svg onClick={this.toggleMenu} className="fill-current w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
                <div id="user-menu" className={" "+this.state.menuDisplay}>
                    <MenuItem title="Profile" url="/profile" />
                    <MenuItem title="Upload CV" url="/profile/resources" />
                    <MenuItem title="Upload CL" url="/profile/resources" />
                    <MenuItem title="Logout" url="/logout" />
                </div>

                <style jsx>{`
                    #user-menu {
                        position:absolute;
                        z-index:10;
                    }
                `}
                </style>
            </div>
        );
    }
}

export default UserMenu;