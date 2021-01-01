import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: "flex",
        justifyContent: "center"
    },
    image: {
        marginTop: 25
    }
})

const PageNotFound = () => {
    const classes = useStyles();
    return <div className={classes.container}><img className={classes.image} src="https://image.freepik.com/free-vector/404-error-page-found-illustration_1124-691.jpg" alt="Page Not Found" /></div>
}

export default PageNotFound;