import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../moviesSlice";
import MovieCard from "../components/MovieCard";

const MoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);
  const movieStatus = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (movieStatus === "idle") {
      dispatch(fetchMovies());
    }
  }, [movieStatus, dispatch]);

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-8">
        Movies List
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
