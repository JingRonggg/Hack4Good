import React from "react";
import ProfileCard from "../../components/Profile/ProfileCard";

const ProfilePage: React.FC = () => {
  return (
    <div style={{ width: "90%", paddingBottom: "70px" }}>
      <h1>Profile</h1>
      <ProfileCard />
    </div>
  );
};

export default ProfilePage;
