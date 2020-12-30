import React, { useEffect, useState, useContext } from "react";
import "./PlayerStats.css";
import StatsTable from "./StatsTable";
import { TeamContext } from "../context/TeamContext";

import { useParams } from "react-router-dom";
import axios from "axios";
import { Paper, Avatar, Grid, Tooltip } from "@material-ui/core/";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    padding: 5
  },
  item_image: {
    padding: 5,
    height: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
  },
  item: {
    padding: 5,
    minHeight: 100,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "auto"
  },
  avatar: {
    height: 100,
    width: 100
  },
  item_table: {
    height: "65vh",
    marginLeft: 15,
    marginRight: 15
  },
  float: {
    position: "fixed",
    bottom: 40,
    right: 40,
    textAlign: "center"
  }
});

const url =
  "https://cricapi.com/api/playerStats?apikey=JfONLh7QY4f8o38gZ0e2WecMXX22&pid=";

const PlayerStats = () => {
  const { team, addPlayer } = useContext(TeamContext);
  const classes = useStyles();
  const { pid } = useParams();
  const [stats, setStats] = useState({});
  useEffect(() => {
    axios.get(`${url}${pid}`).then((res) => {
      setStats(res.data);
    });
  }, []);

  return (
    <>
      <Grid container className={classes.header} spacing={2}>
        <Grid item xs={2}>
          <Paper className={classes.item_image}>
            <Avatar
              className={classes.avatar}
              alt={stats.name}
              src={stats.imageURL}
            />
            <h3>{stats.name}</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.item}>
            <h2>Age</h2>
            <h3>{stats.currentAge}</h3>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.item}>
            <h2>Country</h2>
            <h3>{stats.country}</h3>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.item}>{stats.profile}</Paper>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper className={classes.item_table}>
            {stats && (
              <>{/* <StatsTable data={stats.data} type="batting" /> */}</>
            )}
          </Paper>
        </Grid>
      </Grid>
      <a href="javascript:void(0)">
        <Tooltip title={`Add ${stats.name} to your team?`} arrow>
          <AddCircleIcon
            color="primary"
            fontSize="large"
            className="float"
            onClick={() => addPlayer({ stats })}
          ></AddCircleIcon>
        </Tooltip>
      </a>
    </>
  );
};

export default PlayerStats;
