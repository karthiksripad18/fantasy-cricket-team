import React, { useContext } from "react";

import { TeamContext } from "../context/TeamContext";
import {cricketGroundImage} from "../common/constants";

import { Chip, Avatar, Tooltip } from "@material-ui/core/";
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import { makeStyles } from "@material-ui/core/styles";
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    backgroundImage:
      `url(${cricketGroundImage})`,
    backgroundSize: "100% 100%",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  addIcon: {
    fontSize: 80
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
      <Tooltip title = "Add Players">
        <ControlPointIcon 
          className= {classes.addIcon}
          color="secondary"
        />
      </Tooltip>
      </Link>;
  }

  return (
    <div className={classes.container}>
      {content}
    </div>
  );
};

export default FantasyTeam;
