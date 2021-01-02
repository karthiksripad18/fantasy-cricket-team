import React from "react";

import { Grid, Paper, Tooltip } from "@material-ui/core/";
import { Link } from "react-router-dom";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  playerGrid: {
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
})

const PlayerGrid = ({ pid, name, fullName }) => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Link to={`/player-stats/${pid}`} style={{ textDecoration: "none" }}>
        <Tooltip title={fullName} arrow>
          <Paper className={classes.playerGrid}>
            <h3>{name}</h3>
          </Paper>
        </Tooltip>
      </Link>
    </Grid>
  );
};

export default PlayerGrid;
