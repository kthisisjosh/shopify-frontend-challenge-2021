import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import RemoveIcon from '@material-ui/icons/Remove';

const Nominations = ({ removeNomination, nominations, loadSelectedMovie }) => {

    return (
      <Paper style={{backgroundColor: "#f4f6f8", padding: "1rem 2rem", minWidth: "300px", marginBottom: "2.5vh"}}>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">Nominations</Typography>
            </Grid>
            <Grid container>
                {nominations.map((nomination) => (
                    <Grid container style={{marginBottom: "1vh", width: "100%"}}>
                        <Grid item style={{display: "flex", alignItems: "center", marginRight: 5}}>
                            <IconButton onClick={() => removeNomination(nomination.imdbID)} aria-label="delete">
                                <RemoveIcon fontSize="small"/>
                            </IconButton>
                        </Grid>
                        <Grid item style={{marginTop: 2.5}}>
                            <Typography onClick={() => loadSelectedMovie(nomination.imdbID)} variant="body">
                              {nomination.Title} ({nomination.Year})
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
      </Paper>
    );
}

export default Nominations;