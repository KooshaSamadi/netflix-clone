import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://api.themoviedb.org/3";
// process.env.REACT_APP_TMDB_API_KEY;
const fetchTrending = () => {
  return {
    method: "GET",
    url: `/trending/all/week?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  };
};
const fetchNetlfixOriginals = () => {
  return {
    method: "GET",
    url: `/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_networks=213`,
  };
};
const fetchTopRated = () => {
  return {
    method: "GET",
    url: `/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  };
};
const fetchActionMovies = () => {
  return {
    method: "GET",
    url: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=28`,
  };
};
const fetchComedyMovies = () => {
  return {
    method: "GET",
    url: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=35`,
  };
};

const fetchMovieDetails = (id) => {
  return {
    method: "GET",
    url: `/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US&external_source=imdb_id`,
  };
};
//Get the cast and crew for a movie.
const fetchMovieCredits = (id) => {
  return {
    method: "GET",
    url: `/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  };
};
const fetchMovieVideos = (id) => {
  return {
    method: "GET",
    url: `/movie/${id}/videos?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  };
};
const fetchMovieReviews = (id) => {
  return {
    method: "GET",
    url: `/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=en-US`,
  };
};
export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getFetchTrending: builder.query({
      query: () => {
        return fetchTrending();
      },
    }),
    getfetchNetlfixOriginals: builder.query({
      query: () => {
        return fetchNetlfixOriginals();
      },
    }),
    getFetchTopRated: builder.query({
      query: () => {
        return fetchTopRated();
      },
    }),
    getFetchActionMovies: builder.query({
      query: () => {
        return fetchActionMovies();
      },
    }),
    getFetchComedyMovies: builder.query({
      query: () => {
        return fetchComedyMovies();
      },
    }),

    getFetchMovieDetails: builder.query({
      query: (id) => {
        return fetchMovieDetails(id);
      },
    }),
    getFetchMovieCredits: builder.query({
      query: (id) => {
        return fetchMovieCredits(id);
      },
    }),
    getFetchMovieVideos: builder.query({
      query: (id) => {
        return fetchMovieVideos(id);
      },
    }),
    getFetchMovieReviews: builder.query({
      query: (id) => {
        return fetchMovieReviews(id);
      },
    }),
  }),
});

export const {
  useGetFetchTrendingQuery,
  useGetfetchNetlfixOriginalsQuery,
  useGetFetchTopRatedQuery,
  useGetFetchActionMoviesQuery,
  useGetFetchComedyMoviesQuery,
  useGetFetchMovieDetailsQuery,
  useGetFetchMovieCreditsQuery,
  useGetFetchMovieVideosQuery,
  useGetFetchMovieReviewsQuery,
} = tmdbApi;
