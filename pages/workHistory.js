import Layout from "../components/jobSeekerProfileLayout";
import WorkHistoryForm from "./workHistoryForm";

export default () => {
  return (
    <Layout title="Work History" activeKey={3}>
      <WorkHistoryForm />
    </Layout>
  );
};
