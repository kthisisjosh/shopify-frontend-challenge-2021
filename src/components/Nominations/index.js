import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import useStyles from './style';

const Nominations = ({ removeNomination, nominations, loadSelectedMovie }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.container}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h5">Nominations</Typography>
                </Grid>
                <Grid container>
                    {nominations.map((nomination, index) => (
                        <Grid
                            key={index}
                            container
                            className={classes.nominationContainer}
                        >
                            <Grid
                                item
                                className={classes.nominationButtonContainer}
                            >
                                <IconButton
                                    onClick={() =>
                                        removeNomination(nomination.imdbID)
                                    }
                                    aria-label="delete"
                                >
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                            <Grid
                                item
                                className={classes.nominationTitleContainer}
                            >
                                <Typography
                                    onClick={() =>
                                        loadSelectedMovie(nomination.imdbID)
                                    }
                                    variant="body2"
                                    className={classes.titleText}
                                >
                                    {nomination.Title} ({nomination.Year})
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Nominations;
