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
const fetchHorrorMovies = () => {
  return {
    method: "GET",
    url: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=27`,
  };
};
const fetchRomanceMovies = () => {
  return {
    method: "GET",
    url: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=10749`,
  };
};
const fetchDocumentaries = () => {
  return {
    method: "GET",
    url: `/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&with_genres=99`,
  };
};
//https://api.themoviedb.org/3/trending/all/week?api_key=6eeb142d17f53c2f251f29dd77b6a4e2&language=en-US

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
    getFetchHorrorMovies: builder.query({
      query: () => {
        return fetchHorrorMovies();
      },
    }),
    getFetchRomanceMovies: builder.query({
      query: () => {
        return fetchRomanceMovies();
      },
    }),
    getFetchDocumentaries: builder.query({
      query: () => {
        return fetchDocumentaries();
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
  useGetFetchHorrorMoviesQuery,
  useGetFetchRomanceMoviesQuery,
  useGetFetchDocumentariesQuery,
} = tmdbApi;
