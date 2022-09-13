import { useContext, useState } from "react";
import { GithubContext } from "./context/context";

import Repositorie from "./components/repositorie";

import { FiBookOpen } from "react-icons/fi";
import { RiBookMarkLine } from "react-icons/ri";
import Right from "./icons/right.png";

import Profile from "./components/profile";
import Overview from "./components/overview";

import "./App.css";

function App() {
  const [githubState, dispatch] = useContext(GithubContext);
  const [userInput, setUserInput] = useState("");

  return (
    <main className="main">
      <section className="left">
        <Profile />
      </section>
      <section className="right">
        <img id="blur-right" src={Right} alt="" />
        <div className="right-container">
          <header>
            <div className="search">
              <input
                id="search"
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Insira o user"
                type="text"
              />
              <button
                onClick={() =>
                  dispatch({
                    type: "SET_PROFILE",
                    payload: { user: userInput },
                  })
                }
              >
                Buscar
              </button>
            </div>
            <nav className="navbar">
              <div className="overview-box">
                <button
                  style={{
                    borderBottom: `2px solid ${githubState.overviewBorder}`,
                  }}
                  className="btn"
                  onClick={() => dispatch({ type: "CHANGE_OVERVIEW" })}
                >
                  <FiBookOpen /> Overview
                </button>
              </div>
              <div className="repositorie-box">
                <button
                  style={{
                    borderBottom: `2px solid ${githubState.repositoriesBorder}`,
                  }}
                  className="btn"
                  onClick={() => dispatch({ type: "CHANGE_REPOSITORIES" })}
                >
                  <RiBookMarkLine /> Repositories
                </button>
              </div>
            </nav>
          </header>

          <div className="right-content">
            {githubState.appStage === "Overview" && <Overview />}
            {githubState.appStage === "Repositories" && <Repositorie />}
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
