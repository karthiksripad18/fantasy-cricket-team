import React, {useState, useEffect} from 'react';

import axios from 'axios';
import {Grid} from '@material-ui/core/';

import Article from './Article';
import { makeStyles } from '@material-ui/styles';

const url = "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=64775383945c449d901c2a28bc8a800b";

const useStyles = makeStyles({
    gridContainer: {
        display: "flex",
        justifyContent: "center"
    }
})

const Home = () => {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        axios.get(url).then(
            res => {
                console.log(res.data.articles);
                setArticles(res.data.articles);
            }
        )
    }, []);
    return (
        <Grid container className={classes.gridContainer}>
            {articles && articles.map(article => {
                return <Article title={article.title} image={article.urlToImage} url={article.url} description={article.description} />
            })}
        </Grid>
    )
}

export default Home;
