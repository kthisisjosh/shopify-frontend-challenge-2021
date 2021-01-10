import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import AddIcon from '@material-ui/icons/Add';

const Result = ({ isAlreadyNominated, onNominate, Title, Year, imdbID, loadSelectedMovie }) => {

    return (
        <Grid container direction="row" style={{display: "flex", alignItems: "center", marginBottom: "5px", marginTop: "5px"}}>
            <Grid item style={{marginRight: "10px"}}>
                <IconButton aria-label="Nominate" style={{backgroundColor: "#008060", color:"#FFFFFF"}} disabled={isAlreadyNominated(imdbID)} onClick={() => onNominate(Title, Year, imdbID)}>
                    <AddIcon fontSize="small" style={{width: 15, height: 15}} />
                </IconButton>
            </Grid>
            <Grid item>
                <Typography onClick={() => loadSelectedMovie(imdbID)} variant="body">{Title} ({Year})</Typography>
            </Grid>
        </Grid>
    );
}

export default Result;