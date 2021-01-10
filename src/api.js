const API = 'http://www.omdbapi.com/?i=tt3896198&apikey=e4cfa116';

export const getMoviesBySearch = (search, page=1) => {
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