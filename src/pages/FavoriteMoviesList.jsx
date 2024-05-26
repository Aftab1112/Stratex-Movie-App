import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoriteMoviesList = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Favorite Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default FavoriteMoviesList;
