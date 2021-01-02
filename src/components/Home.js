import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {Grid} from '@material-ui/core/';
import { makeStyles } from '@material-ui/styles';

import Article from './Article';
import LoadingBar from './LoadingBar';
import {newsApiUrl, newsApiKey} from '../common/constants';

const url = `${newsApiUrl}?country=in&category=sports&apiKey=${newsApiKey}`;

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
