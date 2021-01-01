import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

import SearchPlayers from "./components/SearchPlayers";
import PlayerStats from "./components/PlayerStats";
import FantasyTeam from "./components/FantasyTeam";
import MatchCalender from "./components/MatchCalender";
import Home from "./components/Home";

import TeamProvider from "./context/TeamContext";
import SideNav from "./components/SideNav";
import PageNotFound from "./components/PageNotFound";

export default function App() {
  return (
    <TeamProvider>
      <div className="app">
        <SideNav />
        <Switch>
          <Route exact path="/">
            <Home />
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
          <Route path="/match-calender">
            <MatchCalender />
          </Route>
          <Route path="*" exact={true}><PageNotFound /></Route>
        </Switch>
      </div>
    </TeamProvider>
  );
}
