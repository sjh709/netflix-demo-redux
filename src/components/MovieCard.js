import React from 'react';
import { Badge } from 'react-bootstrap';

const MovieCard = ({ item }) => {
  return (
    <div
      className='movie-card'
      style={{
        backgroundImage: `url(https://media.themoviedb.org/t/p/w710_and_h400_multi_faces${item.poster_path})`,
      }}
    >
      <div className='overlay'>
        <h1>{item.title}</h1>
        <div>
          {item.genre_ids.map((id, index) => (
            <Badge bg='danger' key={index}>
              {id}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? '청불' : 'Under 18'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
