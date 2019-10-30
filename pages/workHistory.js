import Layout from "../components/jobSeekerProfileLayout";
import WorkHistoryForm from "./workHistoryForm";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class WorkHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formStatus: "hidden"
    };
  }

  showWorkHistory = () => {
    this.setState({ ...this.state, formStatus: " " });
  };

  hideWorkHistory = () => {
    this.setState({ ...this.state, formStatus: "hidden" });
  };

  render = () => {
    return (
      <div>
        {/* HEADER LINKING */}
        <Header />
        <Layout title="Work History" activeKey={3}>
          <button
            onClick={this.showWorkHistory}
            className={
              "bg-green-darker text-white  p-4 " +
              (this.state.formStatus == "hidden" ? " " : "hidden")
            }
          >
            Add Work Experience
          </button>
          <WorkHistoryForm
            hide={this.hideWorkHistory}
            hidden={this.state.formStatus}
          />
        </Layout>
        {/* FOOTER */}
        <Footer />
      </div>
    );
  };
}
