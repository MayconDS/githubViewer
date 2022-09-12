import { createContext, useReducer } from "react";
import { getProfile } from "../service/github";

export const GithubContext = createContext();

const STAGES = ["Overview", "Repositories"];

const initialState = {
  appStage: STAGES[0],
  profile: "MayconDS",
  overviewBorder: "",
  repositoriesBorder: "",
};

const githubReduce = (state, action) => {
  switch (action.type) {
    case "SET_PROFILE":
      return {
        ...state,
        profile: action.payload.user,
      };

    case "CHANGE_REPOSITORIES":
      return {
        ...state,
        appStage: STAGES[1],
        repositoriesBorder: "#F78166",
        overviewBorder: "",
      };
    case "CHANGE_OVERVIEW":
      return {
        ...state,
        appStage: STAGES[0],
        overviewBorder: "#F78166",
        repositoriesBorder: "",
      };

    default:
      return state;
  }
};

export const GithubProvider = ({ children }) => {
  const value = useReducer(githubReduce, initialState);

  return (
    <GithubContext.Provider value={value}>{children}</GithubContext.Provider>
  );
};
