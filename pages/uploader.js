import ImageUpLoader from '../components/JobseekerImageUploader'



const UpLoader = () => {
    return (
        <div id="side-nav" className="mt-2 p-4">
            <ImageUpLoader form="form" header="Profile Picture" name="profile_pic" />
        </div>
    );
}

export default UpLoader;

