import { useState, useEffect } from "react";

import { FaRegBuilding } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { HiOutlinePaperClip } from "react-icons/hi";

import "./profile.css";
import { getProfile } from "../service/github";
import { useContext } from "react";
import { GithubContext } from "../context/context";

const Profile = () => {
  const [dataProfile, setDataProfile] = useState([]);
  const [githubState] = useContext(GithubContext);

  useEffect(() => {
    const getData = async () => {
      const response = await getProfile(githubState.profile);
      setDataProfile(response);
    };
    getData();
  }, [githubState.profile]);

  return (
    <div className="left-container">
      <div className="img-profile">
        <img src={dataProfile.avatar_url} alt="" />
      </div>
      <div className="user-profile">
        <h2>{dataProfile.name}</h2>
        <span>{dataProfile.login}</span>
      </div>
      <div className="bio-profile">
        <span>{dataProfile.bio}</span>
      </div>
      <div className="redirect-profile">
        <button id="default">
          <a href={dataProfile.html_url} target="_blank">
            VER PERFIL
          </a>
        </button>
      </div>
      <div className="info-profile">
        <div className="company">
          <a href="">
            <FaRegBuilding /> {dataProfile.company}
          </a>
        </div>
        <div className="location">
          <a href="">
            <IoLocationSharp /> {dataProfile.location}
          </a>{" "}
        </div>
        <div className="link">
          <a href={dataProfile.blog} target="_blank">
            <HiOutlinePaperClip /> {dataProfile.blog}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
