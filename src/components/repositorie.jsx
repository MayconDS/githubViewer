import { useState, useEffect, useContext } from "react";
import { GithubContext } from "../context/context";
import { getRepo } from "../service/github";

import { GiCircle } from "react-icons/gi";

import "./repositorie.css";

const Repositorie = () => {
  const [dataRepositories, setDataRepositories] = useState([]);
  const [githubState] = useContext(GithubContext);

  useEffect(() => {
    const getData = async () => {
      const data = await getRepo(githubState.profile);
      setDataRepositories(data);
    };
    getData();
  }, [githubState.profile]);

  return (
    <>
      {dataRepositories.map((item) => (
        <div className="repositorie">
          <div className="name">
            <a href={item.html_url} target="_blank">
              <h4>{item.full_name}</h4>
            </a>
          </div>

          <div className="description">
            <span>{item.description}</span>
          </div>
          <div className="language">
            <span>
              <GiCircle />
              JavaScript
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
export default Repositorie;
