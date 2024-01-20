import api from '../api';

function getMovies() {
  return async (dispatch) => {
    const popularMovieApi = api.get(`/movie/popular`);
    const topRatedApi = api.get(`/movie/top_rated`);
    const upComingApi = api.get(`/movie/upcoming`);

    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);
    // console.log('popularMovies', popularMovies);
    // console.log('topRatedMovies', topRatedMovies);
    // console.log('upcomingMovies', upcomingMovies);
  };
}

export const movieAction = {
  getMovies,
};
