import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ClipLoader from 'react-spinners/ClipLoader';
import Result from '../Result';
import useStyles from './style';

const SearchResults = ({
    isAlreadyNominated,
    onNominate,
    movies,
    searchTerms,
    error,
    loading,
    loadSelectedMovie,
}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h5">
                        Search Results{' '}
                        {searchTerms !== '' && `for "${searchTerms}"`}
                    </Typography>
                    {movies.length == 0 && !error && (
                        <Typography variant="caption">Search!</Typography>
                    )}
                    {error && error !== 'Too many results.' && (
                        <Typography variant="caption">{error}</Typography>
                    )}
                    <Typography variant="caption">
                        Click on a movie title to see more information about it.
                    </Typography>
                </Grid>
                {loading ? (
                    <ClipLoader color="#008060" loading={loading} size={25} />
                ) : (
                    movies.map((movie) => (
                        <Result
                            loadSelectedMovie={loadSelectedMovie}
                            isAlreadyNominated={isAlreadyNominated}
                            onNominate={onNominate}
                            {...movie}
                        />
                    ))
                )}
            </Grid>
        </Paper>
    );
};

export default SearchResults;
