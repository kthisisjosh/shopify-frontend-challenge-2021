import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';

const Result = ({
    isAlreadyNominated,
    onNominate,
    Title,
    Year,
    imdbID,
    loadSelectedMovie,
}) => {
    const classes = useStyles();
    return (
        <Grid container direction="row" className={classes.container}>
            <Grid item className={classes.resultButtonContainer}>
                <IconButton
                    aria-label="Nominate"
                    disabled={isAlreadyNominated(imdbID)}
                    onClick={() => onNominate(Title, Year, imdbID)}
                    className={classes.button}
                >
                    <AddIcon fontSize="small" className={classes.icon} />
                </IconButton>
            </Grid>
            <Grid item>
                <Typography
                    onClick={() => loadSelectedMovie(imdbID)}
                    variant="body"
                >
                    {Title} ({Year})
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Result;
