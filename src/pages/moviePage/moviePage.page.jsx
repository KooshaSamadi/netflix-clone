import React from "react";
import "./moviePage.styles.scss";
import { useParams } from "react-router-dom";
import {
  useGetFetchMovieDetailsQuery,
  useGetFetchMovieCreditsQuery,
  useGetFetchMovieVideosQuery,
  useGetFetchMovieReviewsQuery,
} from "../../services/tmdbApi";
import { Navbar } from "../../components/navbar/navbar.component";
export const MoviePage = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetFetchMovieDetailsQuery(movieId);
  const {
    data: credits,
    error: creditsError,
    isLoading: creditsIsLoading,
  } = useGetFetchMovieCreditsQuery(movieId);
  const {
    data: video,
    error: videoError,
    isLoading: videoIsLoading,
  } = useGetFetchMovieVideosQuery(movieId);
  const {
    data: review,
    error: reviewError,
    isLoading: reviewIsLoading,
  } = useGetFetchMovieReviewsQuery(movieId);

  if (isLoading || creditsIsLoading || videoIsLoading || reviewIsLoading)
    return <div>Loading</div>;

  return (
    <section className="movie_page_container">
      <Navbar />
      <div className="movie_page container-xxl">
        <div
          className="movie_page_img"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${data?.backdrop_path}")`,
            backgroundSize: "cover",
            backgroundPositionX: "center",
          }}
        ></div>
        <div className="movie_page_details container">
          <div className="row">
            <div className="movie_page_details_img col-sm-12 col-md-6">
              <img
                src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
                alt={data?.title}
              />
            </div>
            <div className="movie_page__details_info col-sm-12 col-md-6">
              <h1>{data?.title}</h1>
              <h6>{data?.overview}</h6>
              <div className="movie_page__details_info__rating">
                <p>Rating: {data?.vote_average}</p>
                <p>Release Date: {data?.release_date}</p>
                <p>Runtime: {data?.runtime} mins</p>
                <p>Language: {data?.original_language}</p>
                <p>
                  Genres: {data?.genres.map((genre) => genre.name).join(", ")}
                </p>
                <p>
                  Production Countries:{" "}
                  {data?.production_countries.map((country) => country.name)}
                </p>
                <p>
                  Production Companies:{" "}
                  {data?.production_companies
                    .map((company) => company.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            <div className="movie_page_details_info_cast col-12">
              <h1>Cast</h1>
              <div className="row">
                {credits?.cast.slice(0, 16).map((cast) => (
                  <div
                    className="movie_page_details_info_cast_card col"
                    key={cast.id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                      alt={cast.name}
                    />
                    <p>{cast.name}</p>
                    <p>{cast.character}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="movie_page_details_info_trailer col-12">
            <h1>Trailer</h1>
            {video?.results[0] && (
              <div className="movie_page_details_info_trailer_card row">
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${video?.results[0]?.key}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
          <div className="movie_page_details_info_reviews col-12">
            <h1>Reviews</h1>
            {review?.results.map((review, idx) => (
              <div className="card" key={idx}>
                <div className="card-body">
                  <h5 className="card-title">{review.author}</h5>
                  <p className="card-text">
                    {review.content.slice(0, 500) + " ..."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
