import React from 'react';

import {Card, CardActionArea, CardActions, CardContent, CardMedia, Tooltip } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import LinkIcon from '@material-ui/icons/Link';

const useStyles = makeStyles({
    root: {
      width: 345,
      margin: 10
    },
    media: {
      height: 140,
    },
    link: {
        cursor: "pointer"
    }
  });

const Article = ({title, description, image, url}) => {
    const classes = useStyles();
    return <Card className={classes.root}>
        <CardActionArea>
            <CardMedia
                className={classes.media}
                image={image}
                title={title}
            />
            <CardContent>
                <h2>{title}</h2>
                <p>{description}</p>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Tooltip title="Read full Article">
                <a href={url}>
                    <LinkIcon className={classes.link} />
                </a>
            </Tooltip>
        </CardActions>
    </Card>
}

export default Article;