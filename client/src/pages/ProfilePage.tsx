import React from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import LogoutButton from "../components/Profile/LogOutButton";

const ProfilePage: React.FC = () => {
  return (
    <div style={{ width: "70vw" }}>
      <h1>Profile</h1>
      < ProfileCard />
      < LogoutButton />
    </div>
  );
};

export default ProfilePage;
