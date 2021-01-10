import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClipLoader from 'react-spinners/ClipLoader';

const Info = ({ selectedMovie, loading }) => {
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
    console.log(selectedMovie);
    return (
        <Paper
            style={{
                backgroundColor: '#f4f6f8',
                overflow: 'auto',
                padding: '1rem 2rem',
            }}
        >
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
                        <Grid item >
                            {Poster !== 'N/A' && (
                                <img src={Poster} style={{ width: 250 }} />
                            )}
                        </Grid>
                        <Grid container direction="column" style={{lineHeight: 0.05}}>
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
                        
                        <Grid item style={{marginTop: "1vh"}}>
                            <Typography
                                style={{ lineHeight: '1rem' }}
                                variant="caption"
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
