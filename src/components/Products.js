import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  let { username } = useParams();

  return (
    <div>
      Profile for {username}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        {" "}
        Change to about
      </button>
    </div>
  );
};

export default Profile;
