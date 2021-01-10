import React from "react"
import SearchField from "react-search-field"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"

const Search = ({ setSearchTerms, onSearch }) => {

    return (
      <Paper style={{backgroundColor: "#f4f6f8", border: "solid 1px #17171740", minWidth: "480px", width: "50%", marginRight: "2rem", padding: "1rem 2rem"}}>
        <Grid container direction="column" spacing={5}>
            <Grid item>
                <Typography variant="h5">Movie title</Typography>
            </Grid>
            <SearchField
                placeholder="Search for movies..."
                onChange={(value, event) => setSearchTerms(value)}
            />
            <Grid item direction="row">
                <Button style={{backgroundColor: "#008060", color:"#FFFFFF"}} onClick={() => onSearch()}>Search</Button>
            </Grid>
        </Grid>
      </Paper>
    );
}

export default Search;