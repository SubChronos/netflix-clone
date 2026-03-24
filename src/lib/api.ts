import type { MovieResponse, MovieDetails } from "@/lib/types";

// Opciones - ID de la cuenta
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZThjN2JjYWQxMGIzZDlkYjZmZGM2NDJhODdiMzY3YyIsIm5iZiI6MTc3NDM1MjgwNi45NTksInN1YiI6IjY5YzI3OWE2Y2FiMDNiMmQ2YjdiY2FkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tE86Ks4nI55AEXeE0TTrfV2_3xvKT93kU2cYpwa7l3U'
  }
};


// DETALLE PELICULA
export async function getMovieDetails(peli: string): Promise<MovieDetails> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${peli}?language=es-ES`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}



// TENDENCIA SEMANAL
export async function getWeeklyTrending(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/week?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// TENDENCIA DIARIA
export async function getDailyTrending(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// DISCOVER
export async function getDiscover(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// POPULAR
export async function getPopular(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// MEJOR VALORADO
export async function getTopRated(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// PROXIMAMENTE
export async function getUpcoming(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// EN CINES
export async function getNowPlaying(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// ANIMACION
export async function getCartoon(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=es-ES&sort_by=popularity.desc&with_genres=16&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}

// THRILLER
export async function getThriller(page: number = 1): Promise<MovieResponse> {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=es-ES&sort_by=popularity.desc&with_genres=53&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  return await response.json();
}