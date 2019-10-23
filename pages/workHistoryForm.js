import FlexRow from "../components/FlexRow";
import Input from "../components/jobSeekerProfile/Input";
import Textarea from "../components/jobSeekerProfile/Textarea";
import Select from "../components/jobSeekerProfile/Select";
import "../static/styles.css";
import { Months, Years, Districts, Days } from "../constants";

class WorkHistory extends React.Component {
  handleInputChange = event => {
    console.log(event);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.profileSaveHandler} id="form">
          <div>
            <div className="w-full mb-3">
              <label className="my-4">Employment Status</label>
              <Select
                name="highestEducationalQualification"
                type="text"
                onChange={this.handleInputChange}
                required
              />
            </div>
          </div>
          <div>
            <label>Work Experience</label>
            <div className="my-6">
              <Input
                name="jobTitle"
                type="text"
                onChange={this.handleInputChange}
                placeholder="Job Title"
                required
              />
            </div>
            <div className="my-6">
              <Input
                name="company"
                type="text"
                onChange={this.handleInputChange}
                placeholder="Company"
                required
              />
            </div>
            <div className="my-6">
              <Input
                name="Location"
                type="text"
                onChange={this.handleInputChange}
                placeholder="Location"
                required
              />
            </div>
          </div>

          <div className="flex flex-row align-items-baseline my-4">
            <div className="w-1/3  mb-3 mr-3">
              <label>Start Date</label>
              <Input
                name="startDate"
                type="date"
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="w-1/3  mb-3 mr-3">
              <label>End Date</label>
              <Input
                name="endDate"
                type="date"
                onChange={this.handleInputChange}
              />
            </div>
            <div className="w-1/3 mt-8">
              <span>
                <input type="checkbox" name="stillAttending" />
                <span className="mx-4">I still work here</span>
              </span>
            </div>
          </div>
          <div>
            <Textarea
              name="jobsRolesAndResponsiblities"
              placeholder="Job Roles and Responsibilities"
              rows="7"
              className="w-full"
            ></Textarea>
          </div>
          <div className="flex h-12">
            <button className="text-white flex align-baseline block bg-green-darker px-2">
              <span className="py-4 text-lg">Add Experience</span>
              <svg
                className="h-12 w-12"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="12"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </button>
          </div>
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
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default WorkHistory;
