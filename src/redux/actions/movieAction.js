import api from '../api';

function getMovies() {
  return async (dispatch) => {
    try {
      // 데이터 도착 전
      dispatch({ type: 'GET_MOVIES_REQUEST' });

      const popularMovieApi = api.get(`/movie/popular`);
      const topRatedApi = api.get(`/movie/top_rated`);
      const upComingApi = api.get(`/movie/upcoming`);

      let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
        popularMovieApi,
        topRatedApi,
        upComingApi,
      ]);
      // 데이터 도착 후

      dispatch({
        type: 'GET_MOVIES_SUCCESS',
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upcomingMovies: upcomingMovies.data,
        },
      });
      // console.log('popularMovies', popularMovies);
      // console.log('topRatedMovies', topRatedMovies);
      // console.log('upcomingMovies', upcomingMovies);
    } catch (error) {
      // 에러 핸들링
      dispatch({ type: 'GET_MOVIES_FAILURE' });
    }
  };
}

export const movieAction = {
  getMovies,
};
