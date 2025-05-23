import React from "react";
import Movie from './Movie'
export default function MoviesList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.key} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
