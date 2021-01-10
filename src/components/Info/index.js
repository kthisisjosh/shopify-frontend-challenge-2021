import React from "react"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import ClipLoader from "react-spinners/ClipLoader"

const Info = ({ selectedMovie, loading }) => {
    const { title } = selectedMovie
    return (
      <Paper style={{backgroundColor: "#f4f6f8", overflow: "auto", padding: "1rem 2rem"}}>
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h5">About {`"${title}"`}</Typography>
            </Grid>
            {loading ? <ClipLoader color="#008060" loading={loading} size={25} /> : 
            null}
        </Grid>
      </Paper>
    );
}

export default Info;