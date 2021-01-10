import React from 'react';
import SearchField from 'react-search-field';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './style';

const Search = ({ setSearchTerms }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.container}>
            <Grid container direction="column">
                <Grid item className={classes.titleContainer}>
                    <Typography variant="h5">Movie title</Typography>
                </Grid>
                <SearchField
                    placeholder="Search for movies..."
                    onChange={(value, event) => setSearchTerms(value)}
                />
            </Grid>
        </Paper>
    );
};

export default Search;
