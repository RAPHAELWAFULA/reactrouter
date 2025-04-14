// src/components/MovieCard.js

import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <img src={movie.posterURL} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>See Details</Link>
    </div>
  );
}

export default MovieCard;
