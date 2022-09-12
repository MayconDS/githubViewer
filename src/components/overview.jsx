import { useContext } from "react";
import { GithubContext } from "../context/context";

import "./overview.css";

const Overview = () => {
  const [githubState] = useContext(GithubContext);

  return (
    <div className="card-overview">
      <a href={`https://github.com/${githubState.profile}`}>
        <img
          height="180em"
          src={`https://github-readme-stats.vercel.app/api?username=${githubState.profile}&show_icons=true&theme=dracula&include_all_commits=true&count_private=true`}
        />
      </a>
      <a href={`https://github.com/${githubState.profile}`}>
        <img
          height="180em"
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubState.profile}&layout=compact&langs_count=7&theme=dracula`}
        />
      </a>
    </div>
  );
};
export default Overview;
