import { useState, useEffect, useContext } from "react";
import { GithubContext } from "../context/context";
import { getRepo } from "../service/github";

import { VscRepoForked } from "react-icons/vsc";
import { FaRegStar } from "react-icons/fa";
import { GiCircle } from "react-icons/gi";

import "./repositorie.css";

const Repositorie = () => {
  const [dataRepositories, setDataRepositories] = useState([]);
  const [githubState] = useContext(GithubContext);

  let date = new Date().getDate("2022-09-11T02:12:07Z");
  console.log(date * 1000);

  let ruby = "#701516";
  let js = "#F1E05A";
  let py = "#3572A5";
  let c = "#555555";
  let emcas = "#c065db";
  let css = "#563d7c";

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
          <div className="features">
            <div className="language">
              <span>
                <GiCircle
                  style={{ color: "#F1E05A", backgroundColor: "#F1E05A" }}
                />
                {item.language}
              </span>
            </div>
            <div className="stars">
              <span>
                <FaRegStar e /> {item.stargazers_count}
              </span>
            </div>
            <div className="forks">
              <span>
                <VscRepoForked /> {item.forks_count}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Repositorie;
