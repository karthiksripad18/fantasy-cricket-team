import React from 'react';

import { makeStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }
})

const LoadingBar = () => {
    const classes = useStyles();
    return <div className={classes.container} >
        <CircularProgress />
    </div>
}

export default LoadingBar;