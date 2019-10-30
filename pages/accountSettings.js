import Layout from "../components/jobSeekerProfileLayout";
import AccountSettingsForm from "./accountSettingsForm";
import "../static/styles.css";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default () => {
  return (
      <div>
        {/* HEADER LINKING */}
        <Header />
        <Layout title="Account Settings" activeKey={5}>
          <AccountSettingsForm />
        </Layout>
        {/* FOOTER */}
        <Footer />
      </div>
  );
};
