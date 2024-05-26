import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoriteMoviesList = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold mb-8 ">
        Favorite Movies
      </h1>
      {favorites.length === 0 ? (
        <h2 className="text-2xl text-center">No movies added yet</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMoviesList;
