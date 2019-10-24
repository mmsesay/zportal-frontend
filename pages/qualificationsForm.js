import FlexRow from "../components/FlexRow";
import Input from "../components/jobSeekerProfile/Input";
import AddTextInput from "../components/jobSeekerProfile/AddTextInput";

import Select from "../components/Select";
import { Months, Years, Districts, Days } from "../constants";

class QualificationsForm extends React.Component {
  handleInputChange = event => {
    console.log(event);
  };

  render() {
    return (
      <form onSubmit={this.profileSaveHandler} id="form">
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
          <div className="w-full px-3 mb-3">
            <label>Certifications(s) [Enter up to 7]</label>
            <AddTextInput
              className="mt-2"
              name="certifications"
              type="text"
              onChange={this.handleInputChange}
              required
              placeholder="E.g CCNA... "
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="w-full px-3 mb-3">
            <label>Skills & Expertise</label>
            <AddTextInput
              className="mt-2"
              name="certifications"
              type="text"
              onChange={this.handleInputChange}
              required
              placeholder="E.g Powerpoint Presentations Design... "
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="w-full px-3 mb-3">
            <label>Soft Skills and Personality</label>
            <AddTextInput
              className="mt-2"
              name="certifications"
              type="text"
              onChange={this.handleInputChange}
              required
              placeholder="Eg Team player... "
            />
          </div>
        </FlexRow>
        <FlexRow>
          <div className="mx-auto">
            <input
              type="submit"
              value="Save"
              className="hover:bg-green-darker w-full bg-green-darkest text-lg rounded-full text-white p-4 mx-12 font-bold"
            />
          </div>
        </FlexRow>
      </form>
    );
  }
}

export default QualificationsForm;
