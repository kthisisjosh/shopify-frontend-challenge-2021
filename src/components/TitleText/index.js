import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';
import Link from '@material-ui/core/Link';

const TitleText = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            className={classes.introTextContainer}
        >
            <Grid item>
                <Typography variant="h4" className={classes.titleText}>
                    The{' '}
                    <Link
                        className={classes.link}
                        target="_black"
                        href="https://docs.google.com/document/d/1AZO0BZwn1Aogj4f3PDNe1mhq8pKsXZxtrG--EIbP_-w/edit#heading=h.py0wnvufbhj3"
                    >
                        Shoppies
                    </Link>{' '}
                    2021
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" className={classes.titleText}>
                    Search for your favourite movies and nominate your personal
                    top 5 movies!
                </Typography>
            </Grid>
        </Grid>
    );
};

export default TitleText;
