import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./pages/MoviesList";
import FavoriteMoviesList from "./pages/FavoriteMoviesList";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MoviesList />} />
        <Route path="favorites" element={<FavoriteMoviesList />} />
      </Route>
    </Routes>
  );
};

export default App;
