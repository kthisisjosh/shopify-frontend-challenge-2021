import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"

const Result = ({ isAlreadyNominated, onNominate, Title, Year, imdbID }) => {

    return (
        <Grid container direction="row" style={{display: "flex", alignItems: "center"}}>
            <Grid item>
                <Button style={{backgroundColor: "#008060", color:"#FFFFFF"}} disabled={isAlreadyNominated(imdbID)} onClick={() => onNominate(Title, Year, imdbID)}>Nominate</Button>
            </Grid>
            <Grid item>
                <Typography variant="body">{Title} ({Year})</Typography>
            </Grid>
        </Grid>
    );
}

export default Result;