import Layout from "../components/jobSeekerProfileLayout";
import AccountSettingsForm from "./accountSettingsForm";
import "../static/styles.css";

export default () => {
  return (
    <Layout title="Account Settings" activeKey={5}>
      <AccountSettingsForm />
    </Layout>
  );
};
