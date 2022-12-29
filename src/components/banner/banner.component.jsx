import React, { useState, useEffect } from "react";
import "./banner.styles.scss";
import { useGetFetchTrendingQuery } from "../../services/tmdbApi";
const Banner = () => {
  const [trendingMovie, setTrendingMovie] = useState();
  const {
    data: dataTrending,
    error: errorTrending,
    isLoading: isLoadingTrending,
  } = useGetFetchTrendingQuery();
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
  }
  useEffect(() => {
    setTrendingMovie(
      dataTrending?.results[
        Math.floor(Math.random() * dataTrending?.results.length - 1)
      ]
    );
  }, [dataTrending]);

  if (isLoadingTrending) return <div>Loading...</div>;
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${trendingMovie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">
          {trendingMovie?.original_title ||
            trendingMovie?.title ||
            trendingMovie?.name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(`${trendingMovie?.overview}`, 150)}
        </h1>
      </div>
    </header>
  );
};

export default Banner;
