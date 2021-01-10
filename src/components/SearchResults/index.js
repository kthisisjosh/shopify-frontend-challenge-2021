import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ClipLoader from "react-spinners/ClipLoader"
import Result from "../Result";

const SearchResults = ({ isAlreadyNominated, onNominate, movies, searchTerms, error, loading, loadSelectedMovie }) => {
    return (
      <Paper style={{backgroundColor: "#f4f6f8", minWidth: "480px", width: "50%", marginRight: "2rem", padding: "1rem 2rem"}}>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Search Results {searchTerms !== "" && `for "${searchTerms}"`}</Typography>
                {movies.length == 0 && !error && <Typography variant="caption">Search!</Typography>}
                {error && error !== "Too many results." && <Typography variant="caption">{error}</Typography>}
            </Grid>
            {loading ? <ClipLoader color="#008060" loading={loading} size={25} /> : movies.map((movie) => (
                <Result isAlreadyNominated={isAlreadyNominated} onNominate={onNominate} {...movie} />
            ))}
        </Grid>
      </Paper>
    );
}

export default SearchResults;