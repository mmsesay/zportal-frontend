import FlexRow from "../components/FlexRow";
import Input from "../components/jobSeekerProfile/Input";
import Select from "../components/Select";
import { Months, Years, Districts, Days } from "../constants";

class QualificationsForm extends React.Component {
  handleInputChange = event => {
    console.log(event);
  };

  addHandler = () => {
    this.props.hideForm();
  };

  render() {
    return (
      <form onSubmit={this.addHandler} id="form" className={this.props.hide}>
        <FlexRow>
          <div className="w-full px-3 mb-3">
            <label>Highest Education Attained</label>
            <Select
              name="highestEducationalQualification"
              type="text"
              onChange={this.handleInputChange}
              required
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="w-full px-3 mb-3">
            <label>College / University</label>
            <Input
              name="college"
              type="text"
              onChange={this.handleInputChange}
              placeholder=""
              required
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="w-full px-3 mb-3">
            <label>Field of Major</label>
            <Input
              name="major"
              type="text"
              onChange={this.handleInputChange}
              placeholder=""
              required
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="w-full px-3 mb-3">
            <label>Location</label>
            <Input
              name="location"
              type="text"
              onChange={this.handleInputChange}
              placeholder=""
              required
            />
          </div>
        </FlexRow>

        <FlexRow>
          <div className="w-1/3 px-3 mb-3">
            <label>Start Date</label>
            <Input
              name="email1"
              type="date"
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="w-1/3 px-3 mb-3">
            <label>End Date</label>
            <Input
              name="email2"
              type="date"
              onChange={this.handleInputChange}
            />
          </div>
          <div className="w-1/3 px-3 mb-3 mt-8">
            <span>
              <input type="checkbox" name="stillAttending" />
              <span className="mx-4">Still Attending</span>
            </span>
          </div>
        </FlexRow>

        <FlexRow>
          <div className="">
            <button
              onClick={this.props.hideForm}
              className="hover:bg-green-darker w-full bg-green-darkest text-lg rounded-lg text-white p-4 mx-3 font-bold"
            >
              Add
            </button>
          </div>
        </FlexRow>
      </form>
    );
  }
}

export default QualificationsForm;
