import React from 'react';
import SearchField from 'react-search-field';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Search = ({ setSearchTerms, onSearch }) => {
    return (
        <Paper
            style={{
                backgroundColor: '#f4f6f8',
                minWidth: '480px',
                height: '100px',
                marginRight: '2rem',
                padding: '1rem 2rem',
                marginBottom: '2.5vh',
            }}
        >
            <Grid container direction="column">
                <Grid item style={{ marginBottom: '10px' }}>
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
