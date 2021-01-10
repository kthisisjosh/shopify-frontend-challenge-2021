import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClipLoader from 'react-spinners/ClipLoader';
import makeStyles from './styles';

const Info = ({ selectedMovie, loading }) => {
    const classes = makeStyles();
    const {
        Title,
        Year,
        Released,
        Director,
        Actors,
        Plot,
        Poster,
        Awards,
    } = selectedMovie;
    return (
        <Paper className={classes.container}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h5">
                        About {`"${Title} (${Year})"`}
                    </Typography>
                </Grid>
                {loading ? (
                    <ClipLoader color="#008060" loading={loading} size={25} />
                ) : (
                    <Grid container>
                        <Grid item>
                            {Poster !== 'N/A' && (
                                <img src={Poster} className={classes.poster} />
                            )}
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            className={classes.infoContainer}
                        >
                            <Grid item>
                                <Typography variant="caption">
                                    Released in {Released}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    Directed by: {Director}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    {Actors}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    {Awards}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item className={classes.plotContainer}>
                            <Typography
                                variant="caption"
                                className={classes.plotText}
                            >
                                {Plot}
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Paper>
    );
};

export default Info;
