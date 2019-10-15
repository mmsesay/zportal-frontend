import '../static/styles.css';
import ImageUpLoader from '../components/JobseekerImageUploader';
import Nav from './Nav';

const SideNav = (props) => {
    return (
        <div className="flex flex-col">
                <ImageUpLoader />
                <div className="mt-8">
                <Nav activeKey={props.activeKey} />
                </div>
            <style jsx>{`
                min-width:25rem;
            `}
            </style>
        </div>
    );
}


// <div className="my-4 ml-10">






export default SideNav;