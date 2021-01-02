import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {Grid} from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';

import Article from './Article';
import LoadingBar from './LoadingBar';

const url = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=64775383945c449d901c2a28bc8a800b";

const useStyles = makeStyles({
    gridContainer: {
        display: "flex",
        justifyContent: "center"
    },
    loadingContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    }
})

const Home = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        axios.get(url).then(
            res => {
                setArticles(res.data.articles);
                setIsLoading(false);
            }
        ).catch(
            err => {
                setIsLoading(false)
            }
        );
    }, []);
    return (
        <>
        {isLoading && <LoadingBar />}
        {!isLoading && (
            <Grid container className={classes.gridContainer}>
                {(articles) && articles.map((article, i) => {
                        return <Article key={i} title={article.title} image={article.urlToImage} url={article.url} description={article.description} />
                })}
            </Grid>
        )
        }
        </>
    )
}

export default Home;
