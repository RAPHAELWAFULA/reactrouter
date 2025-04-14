// src/components/MovieDetail.js

import React from "react";
import { useParams, Link } from "react-router-dom";
import movies from "../data"; // Import the movie data

function MovieDetail() {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const movie = movies.find((movie) => movie.id === parseInt(movieId)); // Find the movie by ID

  if (!movie) {
    return <h2>Movie not found!</h2>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <iframe
        width="150"
        height="150"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
        title="movie trailer"
      ></iframe>
      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default MovieDetail;
