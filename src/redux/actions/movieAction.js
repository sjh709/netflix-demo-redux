import api from '../api';

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = await api.get(`/movie/popular`);
    // let url = `https://api.themoviedb.org/3`;
    // let response = await fetch(url)
    // let data = await response.json()

    // let url2 = `https://api.themoviedb.org/3/movie/top_rated
    // `
    // let url3 = `https://api.themoviedb.org/3/movie/top_rated
    // `
  };
}

export const movieAction = {
  getMovies,
};
