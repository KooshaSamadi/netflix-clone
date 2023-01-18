import React from "react";
import "./profile.styles.scss";
import { Navbar } from "../../components/navbar/navbar.component";
import { logout } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import PlanScreen from "../../components/planScreen/planScreen.component";
function Profile({ currentUser }) {
  const { email } = currentUser;
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    logout();
    navigate("/");
  };
  return (
    <section className="profile">
      <Navbar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_info">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="avatar"
          />
          <div className="profile_details">
            <h2>{email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button className="profile_signout" onClick={logoutHandler}>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
