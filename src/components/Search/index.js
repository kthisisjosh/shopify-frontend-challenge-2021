import React from "react"
import Paper from "@material-ui/core/Paper"
import { Button, Grid, Typography } from "@material-ui/core"

const Search = ({ setSearchTerms, onSearch }) => {

    return (
      <Paper style={{backgroundColor: "#f4f6f8", border: "solid 1px #17171740", minWidth: "480px", width: "50%", marginRight: "2rem", padding: "1rem 2rem"}}>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Movie title</Typography>
            </Grid>
            <Grid item>
                <input onChange={(event) => setSearchTerms(event.target.value)} />
            </Grid>
            <Grid item direction="row">
                <Button style={{backgroundColor: "#008060", color:"#FFFFFF"}} onClick={() => onSearch()}>Search</Button>
            </Grid>
        </Grid>
      </Paper>
    );
}

export default Search;