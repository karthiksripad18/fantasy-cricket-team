import React, { useState } from "react";

import axios from "axios";
import { TextField, Button, Grid } from "@material-ui/core/";
import {makeStyles} from '@material-ui/core/styles';

import PlayerGrid from "./PlayerGrid";
import {cricApiKey, cricApiUrl} from '../common/constants';

const url =
  `${cricApiUrl}playerFinder?apikey=${cricApiKey}&name=`;


const useStyles = makeStyles({
  searchPlayer: {
    display: "flex",
    flexDirection: "column",
    padding: 10
  },
  searchPlayerForm: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  searchPlayerList: {
    margin: 10
  }
});

const SearchPlayers = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [players, setPlayers] = useState([]);

  const getSearchResults = () => {
    axios.get(`${url}${input}`).then((res) => {
      setPlayers(res.data.data);
      console.log(players);
    });
  };
  return (
    <div className={classes.searchPlayer}>
      <div className={classes.searchPlayerForm}>
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
        <div className={classes.searchPlayerList}>
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
