import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import SearchPlayers from "./components/SearchPlayers";
import PlayerStats from "./components/PlayerStats";
import FantasyTeam from "./components/FantasyTeam";

import TeamProvider from "./context/TeamContext";

export default function App() {
  return (
    <TeamProvider>
      <div className="app">
        <Switch>
          <Route exact path="/">
            estT
          </Route>
          <Route path="/search-players">
            <SearchPlayers />
          </Route>
          <Route path="/player-stats/:pid">
            <PlayerStats />
          </Route>
          <Route path="/fantasy-team">
            <FantasyTeam />
          </Route>
        </Switch>
      </div>
    </TeamProvider>
  );
}