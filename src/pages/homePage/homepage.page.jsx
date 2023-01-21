import React from "react";
import { Navbar } from "../../components/navbar/navbar.component";
import Banner from "../../components/banner/banner.component";
import "./homepage.styles.scss";
import MovieCard from "../../components/movieCard/movieCard.component";
import { Row, Container, Col } from "react-bootstrap";
import {
  useGetFetchTrendingQuery,
  useGetfetchNetlfixOriginalsQuery,
  useGetFetchTopRatedQuery,
  useGetFetchActionMoviesQuery,
  useGetFetchComedyMoviesQuery,
} from "../../services/tmdbApi";

const Homepage = () => {
  const {
    data: dataTrending,
    error: errorTrending,
    isLoading: isLoadingTrending,
  } = useGetFetchTrendingQuery();
  const {
    data: dataNetflixOriginals,
    error: errorNetflixOriginals,
    isLoading: isLoadingNetflixOriginals,
  } = useGetfetchNetlfixOriginalsQuery();
  const {
    data: dataTopRated,
    error: errorTopRated,
    isLoading: isLoadingTopRated,
  } = useGetFetchTopRatedQuery();
  const {
    data: dataActionMovies,
    error: errorActionMovies,
    isLoading: isLoadingActionMovies,
  } = useGetFetchActionMoviesQuery();
  const {
    data: dataComedyMovies,
    error: errorComedyMovies,
    isLoading: isLoadingComedyMovies,
  } = useGetFetchComedyMoviesQuery();

  const allMovies = [
    ["TRENDING", dataTrending?.results],
    ["NETFLIX ORIGINALS", dataNetflixOriginals?.results],
    ["TOP RATED", dataTopRated?.results],
    ["ACTION MOVIES", dataActionMovies?.results],
    ["COMEDY MOVIES", dataComedyMovies?.results],
  ];
  if (
    isLoadingTrending ||
    isLoadingTopRated ||
    isLoadingNetflixOriginals ||
    isLoadingActionMovies ||
    isLoadingComedyMovies
  )
    return <div>Loading...</div>;
  return (
    <Container fluid="xxl" className="homepage">
      <Navbar />
      <Banner />

      {allMovies.map((movie, idx) => (
        <section key={idx}>
          <h1 className="homepage_row_title">{movie[0]}</h1>
          <div className="homepage_row">
            {movie[1]
              .slice(0, 10)
              .map(
                (card, idx) =>
                  (card?.poster_path || card?.backdrop_path) && (
                    <MovieCard movie={card} key={idx} category={movie[0]} />
                  )
              )}
          </div>
        </section>
      ))}
    </Container>
  );
};

export default Homepage;
