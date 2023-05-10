import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div>
      <ol>
        {props.movieListing.map((movie, index) => {
          return (
            <li key={index}>
              <MovieCard name={movie} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default MovieList;
