import React from 'react';

const MovieCard = ({ item }) => {
  return (
    <div
      className='movie-card'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path})`,
      }}
    >
      MovieCard
    </div>
  );
};

export default MovieCard;
