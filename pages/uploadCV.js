import Layout from '../components/jobSeekerProfileLayout';
import Uploader from '../components/DocumentUploader';
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {
    return (
        <div>
            {/* HEADER LINKING */}
            <Header />
            <Layout title="Upload CV or Cover Letter" activeKey={4}>
                <Uploader />
            </Layout>
            {/* FOOTER */}
            <Footer />
        </div>
    );
}

export default page;