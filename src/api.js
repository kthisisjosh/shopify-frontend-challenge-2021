const API = 'http://www.omdbapi.com/?apikey=e4cfa116';

export const getMoviesBySearch = (search, page = 1) => {
    return fetch(`${API}&s=${search}&type=movie&page=${page}`, {
        method: 'GET',
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            return {
                error: 'Could not get movies.',
            };
        });
};

export const getMovieById = (imdbID) => {
    return fetch(`${API}&i=${imdbID}&type=movie`, {
        method: 'GET',
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            return {
                error: 'Could not get movie.',
            };
        });
};
