import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"

const Result = ({ isAlreadyNominated, onNominate, Title, Year, imdbID }) => {

    return (
        <Grid container direction="row" style={{display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "5px"}}>
            <Grid item style={{marginRight: "10px"}}>
                <Button style={{backgroundColor: "#008060", color:"#FFFFFF"}} disabled={isAlreadyNominated(imdbID)} onClick={() => onNominate(Title, Year, imdbID)}>Nominate</Button>
            </Grid>
            <Grid item>
                <Typography variant="body">{Title} ({Year})</Typography>
            </Grid>
        </Grid>
    );
}

export default Result;