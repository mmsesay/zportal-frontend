import AddTextInput from "../components/jobSeekerProfile/AddTextInput";
import FlexRow from "../components/FlexRow";
import React from "react";

class Skills extends React.Component {
  render = () => {
    return (
      <form>
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
      </form>
    );
  };
}

export default Skills;
