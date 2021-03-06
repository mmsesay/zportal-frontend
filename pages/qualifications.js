import Layout from "../components/jobSeekerProfileLayout";
import QualificationsForm from "./qualificationsForm";
import Skills from "./Skills";
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class Qualification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qualificationsFormStatus: "hidden"
    };
  }

  showForm = () => {
    this.setState({ qualificationsFormStatus: " " });
  };

  hideForm = () => {
    this.setState({ qualificationsFormStatus: "hidden" });
  };

  render = () => {
    return (
      <div>
        {/* HEADER LINKING */}
        <Header />
          <Layout title="Education and Skills" activeKey={2}>
            <button
              onClick={this.showForm}
              className="bg-green-darkest p-4 hover:bg-green-darker text-white mb-2"
            >
              Add Educational Qualification
            </button>
            <QualificationsForm
              hide={this.state.qualificationsFormStatus}
              hideForm={this.hideForm}
            />
            <Skills />
          </Layout>
        {/* FOOTER */}
        <Footer />
      </div>
    );
  };
}
