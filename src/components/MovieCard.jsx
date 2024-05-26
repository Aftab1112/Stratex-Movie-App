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
    <div className="p-4  border-2 rounded-lg shadow-lg  hover:scale-105 z-20 duration-300">
      <img
        src={alterateImage}
        alt={movie.movie}
        className="w-full h-64 object-cover rounded-t-lg cursor-pointer mt-3 "
        onClick={() => window.open(movie.imdb_url, "_blank")}
      />
      <div className="p-4 flex justify-center items-center flex-col">
        <h2 className="text-xl font-bold text-center ">{movie.movie}</h2>
        <p className="text-gray-800 font-medium ">Rating : {movie.rating}</p>
        <button
          className="btn mt-2 font-medium px-8 py-2 w-32 flex justify-center items-center  border-2 border-teal-300 rounded-md "
          onClick={handleFavoriteClick}
        >
          {movie.isFavorite ? "Unfavorite" : "Favorite"}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
