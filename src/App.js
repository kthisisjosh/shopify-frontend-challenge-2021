import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getMoviesBySearch, getMovieById } from './api';
import Search from './components/Search';
import Info from './components/Info';
import Nominations from './components/Nominations';
import SearchResults from './components/SearchResults';
import TitleText from './components/TitleText';
import { Banner } from 'material-ui-banner';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import useStyles from './style';
import './style.css';

const App = () => {
    const [nominations, setNominations] = useState([]);
    const [bannerOpen, setBannerOpen] = useState(false);
    const [movies, setMovies] = useState([]);
    const [searchTerms, setSearchTerms] = useState('');
    const [error, setError] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [loadingSelectedMovie, setLoadingSelectedMovie] = useState(false);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();

    const theme = createMuiTheme({
        typography: {
            fontFamily: ['Poppins', 'sans-serif'].join(','),
        },
    });

    useEffect(() => {
        if (nominations.length === 5) {
            setBannerOpen(true);
        } else {
            setBannerOpen(false);
        }
    }, [nominations]);

    useEffect(() => {
        const savedNominations = getSavedNominations();
        if (savedNominations) {
            setNominations(JSON.parse(savedNominations));
        }
    }, []);

    useEffect(() => {
        loadMovies();
    }, [searchTerms]);

    const loadMovies = () => {
        if (searchTerms != '') {
            setLoading(true);
            getMoviesBySearch(searchTerms).then((data) => {
                if (data.Error) {
                    setError(data.Error);
                    setMovies([]);
                } else {
                    setError(null);
                    setMovies(data.Search);
                }
                setLoading(false);
            });
        }
    };

    const loadSelectedMovie = (imdbID) => {
        setLoadingSelectedMovie(true);
        getMovieById(imdbID).then((data) => {
            setSelectedMovie(data);
            setLoadingSelectedMovie(false);
        });
    };

    const onNominate = (Title, Year, imdbID) => {
        let newNominations = [...nominations];
        let nomination = { Title, Year, imdbID };

        if (isAlreadyNominated(imdbID)) {
        } else {
            if (nominations.length < 5) {
                newNominations.push(nomination);
            }
        }

        setNominations(newNominations);
        saveNominations();
    };

    const getSavedNominations = () => {
        return localStorage.getItem('LOCAL_NOMINATIONS');
    };

    const saveNominations = () => {
        localStorage.setItem('LOCAL_NOMINATIONS', JSON.stringify(nominations));
    };

    const removeNomination = (imdbID) => {
        setNominations(
            nominations.filter((nomination) => nomination.imdbID !== imdbID)
        );
    };

    const isAlreadyNominated = (imdbID) => {
        return nominations.some((nomination) => nomination.imdbID === imdbID);
    };

    window.addEventListener('beforeunload', () => {
        saveNominations();
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container direction="column" className={classes.container}>
                <TitleText />
                <Banner
                    paperProps={{ style: { width: '60%' } }}
                    appBar
                    label="You've reached your maximum nominations!"
                    showDismissButton={false}
                    open={bannerOpen}
                />
                <Grid container direction="row">
                    <Grid
                        container
                        direction="column"
                        className={classes.searchContainer}
                    >
                        <Search setSearchTerms={setSearchTerms} />
                        <SearchResults
                            isAlreadyNominated={isAlreadyNominated}
                            onNominate={onNominate}
                            setSearchTerms={setSearchTerms}
                            searchTerms={searchTerms}
                            loading={loading}
                            error={error}
                            loadSelectedMovie={loadSelectedMovie}
                            movies={movies}
                        />
                    </Grid>
                    <Grid
                        container
                        direction="column"
                        className={classes.nominationContainer}
                    >
                        <Nominations
                            removeNomination={removeNomination}
                            nominations={nominations}
                            loadSelectedMovie={loadSelectedMovie}
                        />
                        {selectedMovie && (
                            <Info
                                loading={loadingSelectedMovie}
                                selectedMovie={selectedMovie}
                            />
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default App;
