import React from "react"
import Paper from "@material-ui/core/Paper"
import { Button, Grid, Typography } from "@material-ui/core"

const Nominations = ({ removeNomination, nominations }) => {

    return (
      <Paper style={{backgroundColor: "#f4f6f8", border: "solid 1px #17171740", width: "30%", padding: "1rem 2rem"}}>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Nominations</Typography>
            </Grid>
            <Grid container>
                {nominations.map((nomination) => (
                    <Grid item style={{marginBottom: "1vh", width: "100%"}}>
                        <Typography onClick={() => removeNomination(nomination.imdbID)} variant="body">
                            {nomination.Title} ({nomination.Year})
                        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Grid>
      </Paper>
    );
}

export default Nominations;