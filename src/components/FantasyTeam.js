import React, { useContext } from "react";

import { TeamContext } from "../context/TeamContext";

import { Grid, Paper, Avatar } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  paper: {
    height: "80vh",
    width: "100%",
    marginTop: 25,
    backgroundImage:
      "url('https://upload.wikimedia.org/wikipedia/commons/d/d0/Cricket_field_blank.svg')",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  }
});

const FantasyTeam = () => {
  const classes = useStyles();
  const { team } = useContext(TeamContext);
  return (
    <div className={classes.container}>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          {team.map((player) => {
            return <Avatar alt={player.name} src={player.imageURL}></Avatar>;
          })}
        </Paper>
      </Grid>
    </div>
  );
};

export default FantasyTeam;
