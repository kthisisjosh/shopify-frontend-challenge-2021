import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { getMoviesBySearch, getMovieById } from './api';
import Search from './components/Search';
import Info from './components/Info';
import Nominations from './components/Nominations';
import SearchResults from './components/SearchResults';
import Typography from '@material-ui/core/Typography';
import "./style.css"

const App = () => {
    const [nominations, setNominations] = useState([{ Title: 'test' }]);
    const [movies, setMovies] = useState([]);
    const [searchTerms, setSearchTerms] = useState('');
    const [error, setError] = useState(null)
    const [selectedMovie, setSelectedMovie] = useState(null)
    const [loadingSelectedMovie, setLoadingSelectedMovie] = useState(false)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (nominations.length === 5) {
            alert("You've reached your maximum nominations!");
        }
    }, [nominations]);
    
    useEffect(() => {
      const savedNominations = getSavedNominations();
      if (savedNominations) {
          setNominations(JSON.parse(savedNominations));
      }
    }, [])

    useEffect(() => {
        loadMovies();
    }, [searchTerms]);

    const loadMovies = () => {
        if (searchTerms != '') {
          setLoading(true);
          getMoviesBySearch(searchTerms).then((data) => {
              if (data.Error) {
                setError(data.Error)
                setMovies([])
              } else {
                setError(null)
                setMovies(data.Search);
              }
              setLoading(false);
          });
        }
    };

    const loadSelectedMovie = (imdbID) => {
      setLoadingSelectedMovie(true)
      getMovieById(imdbID).then((data) => {
        setSelectedMovie(data)
        setLoadingSelectedMovie(false)
      })
    }

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
        <Grid
            container
            direction="column"
            style={{
                width: '70%',
                margin: 'auto',
                padding: '2rem 1rem',
                maxWidth: '1080px',
            }}
        >
            <Grid container direction="column" style={{marginBottom: "5vh"}}>
              <Grid item>
                <Typography variant="h4" style={{color: "#FFFFFF"}}>The Shoppies 2021</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" style={{color: "#FFFFFF"}}>Search for your favourite movies and nominate your personal top 5 movies!</Typography>
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid container direction="column" style={{ width: "60%", marginBottom: '2.5vh' }}>
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
              <Grid container direction="column" style={{width: "40%"}}>
                <Nominations
                  removeNomination={removeNomination}
                  nominations={nominations}
                  loadSelectedMovie={loadSelectedMovie}
                />
                {selectedMovie && <Info loading={loadingSelectedMovie} selectedMovie={selectedMovie} />}
              </Grid>
            </Grid>
        </Grid>
    );
};

export default App;
