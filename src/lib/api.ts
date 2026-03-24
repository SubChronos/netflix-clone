import type { MovieResponse, MovieDetails } from "@/lib/types";

// Opciones - ID de la cuenta
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZThjN2JjYWQxMGIzZDlkYjZmZGM2NDJhODdiMzY3YyIsIm5iZiI6MTc3NDM1MjgwNi45NTksInN1YiI6IjY5YzI3OWE2Y2FiMDNiMmQ2YjdiY2FkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tE86Ks4nI55AEXeE0TTrfV2_3xvKT93kU2cYpwa7l3U'
  }
};

// FETCH API
export async function getMovies(url: string, params: string = "", page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/${url}?language=es-ES${params}&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// DETALLE PELICULA
export async function getMovieDetails(peli: string): Promise<MovieDetails> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${peli}?language=es-ES`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}



//// TENDENCIA SEMANAL
//export const getWeeklyTrending = (page: number = 1) => 
//  getMovies("trending/movie/week", "", 1);
//
//// TENDENCIA DIARIA
//export const getDailyTrending = (page: number = 1) => 
//  getMovies("trending/movie/day", "", 1);
//
//// DISCOVER
//export const getDiscover = (page: number = 1) => 
//  getMovies("discover/movie", "", 1);
//
//// POPULAR
//export const getPopular = (page: number = 1) => 
//  getMovies("movie/popular", "", 1);
//
//// MEJOR VALORADO
//export const getTopRated = (page: number = 1) => 
//  getMovies("movie/top_rated", "", 1);
//
//// PROXIMAMENTE
//export const getUpcoming = (page: number = 1) => 
//  getMovies("movie/upcoming", "", 1);
//
//// EN CINES
//export const getNowPlaying = (page: number = 1) => 
//  getMovies("movie/now_playing", "", 1);
//
//// ANIMACION (Género 16)
//export const getCartoon = (page: number = 1) => 
//  getMovies("discover/movie", "&sort_by=popularity.desc&with_genres=16", 1);
//
//// THRILLER (Género 53)
//export const getThriller = (page: number = 1) => 
//  getMovies("discover/movie", "&sort_by=popularity.desc&with_genres=53", 1);