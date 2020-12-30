import React, { createContext, useReducer } from "react";

import teamReducer from "./teamReducer";

const initialState = {
  team: []
};

export const TeamContext = createContext(initialState);

const TeamProvider = ({ children }) => {
  const [{ team }, dispatch] = useReducer(teamReducer, initialState);
  const ifPlayerExists = (id) => {
    return team.find((player) => player.pid === id) ? true : false;
  };
  const addPlayer = (playerInfo) => {
    if (!ifPlayerExists(playerInfo.pid)) {
      dispatch({ type: "ADD_PLAYER", payload: playerInfo });
    } else {
      console.log("Exists Guru");
    }
  };
  return (
    <TeamContext.Provider
      value={{
        team: team,
        addPlayer: addPlayer
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
