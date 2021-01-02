import React, {useEffect, useState} from 'react';

import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core/";

import LoadingBar from './LoadingBar';

const url = "https://cricapi.com/api/matchCalendar?apikey=JfONLh7QY4f8o38gZ0e2WecMXX22";

const useStyles = makeStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    paper: {
      height: 75,
      marginTop: 10,
      width: "75vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    team: {
        fontSize: 18,
        fontWeight: 700
    },
    date: {
        fontSize: 12
    }
  });

const MatchCalender = () => {
    const classes = useStyles();
    const [matches, setMatches] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then(res => {
            setIsLoading(false);
            setMatches(res.data.data.slice(0, 20));
        })
        .catch(
            err => {
                setIsLoading(false);
            }
        )
    }, [])
    return (
        <>
        {isLoading && <LoadingBar />}
        {!isLoading && <div className={classes.container}>
            {matches.map(match => {
                return <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <p className={classes.team}>{match.name}</p>
                        <p className={classes.date}>{match.date}</p>
                    </Paper>
                </Grid>
            })}
        </div>
        }
        </>
    )
}

export default MatchCalender;
