import React, { useContext } from "react";

import { TeamContext } from "../context/TeamContext";

import { Grid, Paper, Chip, Button, Avatar } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';

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
  const { team, removePlayer } = useContext(TeamContext);
  const handleDelete = (pid) => {
    removePlayer(pid);
  }
  let content;
  if (team.length) {
    content = team.map((player) => {
      return <Chip avatar={<Avatar alt={player.name} src={player.imageURL} />} label={player.name} onDelete={() => handleDelete(player.pid)}></Chip>;
    })
  } else {
    content = <Link style={{textDecoration: "none"}} to="/search-players">
    <Button
    variant="contained"
    color="primary"
    className={classes.button}
  >
    Search Players
  </Button></Link>;
  }

  return (
    <div className={classes.container}>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          {content}
        </Paper>
      </Grid>
    </div>
  );
};

export default FantasyTeam;
