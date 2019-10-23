import Layout from "../components/jobSeekerProfileLayout";
import QualificationsForm from "./qualificationsForm";

export default () => {
  return (
    <Layout title="Education and Skills" activeKey={2}>
      <QualificationsForm />
    </Layout>
  );
};
