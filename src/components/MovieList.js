// src/components/MovieList.js

import React from "react";
import { Link } from "react-router-dom";
import MovieCard from './MovieCard';
import movies from "../data"; // Import the movie data

function MovieList() {
  return (
    <div>
      <h1>Movie List</h1>
      <div className="movie-cards">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img src={movie.posterURL} alt={movie.title} />
            <h2>{movie.title}</h2>
            <Link to={`/movie/${movie.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
