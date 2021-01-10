import React, { useState, useEffect } from "react"
import { getMoviesBySearch } from "./api"

const App = () => {
  const [movies, setMovies] = useState([])
  const [searchTerms, setSearchTerms] = useState("")
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const loadMovies = () => {
    setLoading(true);
    if (searchTerms != "") {
      getMoviesBySearch(searchTerms, page).then((data) => {
      setMovies(data.Search);
      setLoading(false);
    });
    }
  };

    useEffect(() => {
      loadMovies();
    }, [searchTerms]);

    return (
      <>
        <input onClick={(event) => setSearchTerms(event.target.value)} />
        {loading ? null : movies.map((movie) => (
          <h3 key={movie.imdbID}>{movie.Title}</h3>
        ))}
      </>
    );
}

export default App;
