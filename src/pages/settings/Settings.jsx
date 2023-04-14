import MainSidebar from "../../components/sidebar/MainSidebar";
import "./settings.css";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
		<form className="settingsForm">
			<label>Profile Picture</label>
			<div className="settingsPP">
				<img src="https://i.pinimg.com/474x/2b/46/0f/2b460fdf3ac5fada7d10f7c542b9508b.jpg" alt="" />
				<label htmlFor="fileInput">
					<i className="settingsPPIcon far fa-user-circle"></i>
				</label>
				<input type="file" id="fileInput" style={{display:"none"}}/>
			</div>
			<label>Username</label>
			<input type="text" placeholder="King King" />
			<label>Email</label>
			<input type="email" placeholder="nguyeminhtrii@gmail.com" />
			<label>Password</label>
			<input type="password"/>
			<button className="settingsSubmit">Update</button>
		</form>
      </div>
      <MainSidebar />
    </div>
  );
};

export default Settings;
