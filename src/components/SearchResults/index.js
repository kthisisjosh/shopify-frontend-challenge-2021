import React from "react"
import Paper from "@material-ui/core/Paper"
import { Grid, Typography } from "@material-ui/core"
import Result from "../Result";

const SearchResults = ({ isAlreadyNominated, onNominate, movies, searchTerms, loading }) => {

    return (
      <Paper style={{backgroundColor: "#f4f6f8", border: "solid 1px #17171740", minWidth: "480px", width: "50%", marginRight: "2rem", padding: "1rem 2rem"}}>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Search Results {movies.length > 0 && `for "${searchTerms}"`}</Typography>
                {movies.length == 0 && <Typography variant="caption">Search!</Typography>}
            </Grid>
            {loading ? null : movies.map((movie) => (
                <Result isAlreadyNominated={isAlreadyNominated} onNominate={onNominate} {...movie} />
            ))}
        </Grid>
      </Paper>
    );
}

export default SearchResults;