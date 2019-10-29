import Layout from '../components/jobSeekerProfileLayout';
import Uploader from '../components/DocumentUploader';

const page = () => {
    return (
        <Layout title="Upload CV or Cover Letter" activeKey={4}>
            <Uploader />
        </Layout>
    );
}

export default page;