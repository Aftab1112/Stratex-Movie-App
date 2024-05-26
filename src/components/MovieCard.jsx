import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../moviesSlice";
import toast from "react-hot-toast";
import alterateImage from "../assets/alternateimage.jpg";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(movie.id));
    toast.success(
      movie.isFavorite
        ? "Movie removed from favorites"
        : "Movie added to favorites"
    );
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg hover:bg-gray-100">
      <img
        src={alterateImage}
        alt={movie.movie}
        className="w-full h-64 object-cover rounded-t-lg"
        onClick={() => window.open(movie.imdb_url, "_blank")}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{movie.movie}</h2>
        <p className="text-gray-800">Rating : {movie.rating}</p>
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          onClick={handleFavoriteClick}
        >
          {movie.isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
