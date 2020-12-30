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
  const ifTeamLimitExceeded = () => {
    return team.length >= 11;
  }
  const addPlayer = (playerInfo) => {
    if (ifTeamLimitExceeded()) {
      return {open: true, message: 'Your team is already full.'}
    }
    else if (ifPlayerExists(playerInfo.stats.pid)) {
      return {open: true, message: `${playerInfo.stats.name} already exists.`}
    } else {
      dispatch({ type: "ADD_PLAYER", payload: playerInfo.stats });
      return {open: true, message: `${playerInfo.stats.name} added to your team.`}
    }
  };
  const removePlayer = (pid) => {
    dispatch({ type: "REMOVE_PLAYER", payload: pid });
  }
  return (
    <TeamContext.Provider
      value={{
        team,
        addPlayer,
        removePlayer
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamProvider;
