import React, { useState } from "react";

import axios from "axios";

import "./SearchPlayers.css";

import { TextField, Button, Grid } from "@material-ui/core/";

import PlayerGrid from "./PlayerGrid";

const url =
  "https://cricapi.com/api/playerFinder?apikey=JfONLh7QY4f8o38gZ0e2WecMXX22&name=";
const config = {
  headers: { "Access-Control-Allow-Origin": "*" }
};
const SearchPlayers = () => {
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState([]);

  const getSearchResults = () => {
    axios.get(`${url}${input}`).then((res) => {
      setPlayers(res.data.data);
      console.log(players);
    });
  };
  return (
    <div className="search-player">
      <div className="search-players__form">
        <form>
          <TextField
            id="player-name"
            label="Outlined"
            variant="outlined"
            size="small"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            onClick={getSearchResults}
            style={{ marginLeft: 5 }}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
      </div>
      {players && (
        <div className="search-players__list">
          <Grid container spacing={3}>
            {players.map((player) => {
              return <PlayerGrid key={player.pid} {...player} />;
            })}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default SearchPlayers;
