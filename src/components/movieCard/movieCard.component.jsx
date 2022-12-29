import "./movieCard.styles.scss";
import React from "react";

const MovieCard = ({ movie, category }) => {
  const { poster_path, backdrop_path } = movie;

  return (
    <div className="movie-card">
      {/* <h3>{movie.title || movie.name || movie.original_title}</h3> */}
      <img
        className={`movie-card_img ${category === "TRENDING" && "poster_img"}`}
        src={`https://image.tmdb.org/t/p/original${
          category === "TRENDING" ? poster_path : backdrop_path
        }`}
        alt={movie.title || movie.name}
      />
    </div>
  );
};

export default MovieCard;
