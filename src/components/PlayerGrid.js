import React from "react";

import "./PlayerGrid.css";

import { Grid, Paper, Tooltip } from "@material-ui/core/";
import { Link } from "react-router-dom";

const PlayerGrid = ({ pid, name, fullName }) => {
  return (
    <Grid item xs={3}>
      <Link to={`/player-stats/${pid}`} style={{ textDecoration: "none" }}>
        <Tooltip title={fullName} arrow>
          <Paper className="player-grid__paper">
            <h3>{name}</h3>
          </Paper>
        </Tooltip>
      </Link>
    </Grid>
  );
};

export default PlayerGrid;
