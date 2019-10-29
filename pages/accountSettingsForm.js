import FlexRow from "../components/FlexRow";
import Input from "../components/jobSeekerProfile/Input";
import Select from "../components/jobSeekerProfile/Select";
import { Months, Years, Districts, Days } from "../constants";

class AccountSettingsForm extends React.Component {
  deleteAccountHandler = () => {
    alert("Delete Account!");
  };
  render() {
    return (
      <form onSubmit={this.profileSaveHandler} id="form">
        <div className="mb-4">
          <label className="my-2 block">Email Address</label>
          <Input
            name="email"
            type="email"
            onChange={this.handleInputChange}
            placeholder="Jane@Doe"
            required
          />
          <button className="text-green-darker my-4">Update Email</button>
        </div>

        <div className="mb-4">
          <label className="my-2 block">Password</label>
          <Input
            name="password"
            type="password"
            placeholder="*************"
            required
          />
          <button className="text-green-darker my-4">Change Password</button>
        </div>
        <div className="mb-6">
          <label className="mb-3 block">Account Status</label>
          <div className="flex flex-row-reverse">
            <div className="w-1/2">
              <span>
                <input type="radio" value="disabled" name="accountStatus" />
                <span className="mx-4">Enable</span>
              </span>
            </div>
            <div className="w-1/2">
              <span>
                <input type="radio" value="disabled" name="accountStatus" />
                <span className="mx-4">Disable</span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <button
            className="text-white bg-green-darker p-4 rounded text-lg"
            onClick={this.deleteAccountHandler}
          >
            Delete Account
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
    );
  }
}

export default AccountSettingsForm;
