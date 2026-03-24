import type { MovieResponse, MovieDetails, VideoResponse } from "@/lib/types";

// Opciones - ID de la cuenta
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZThjN2JjYWQxMGIzZDlkYjZmZGM2NDJhODdiMzY3YyIsIm5iZiI6MTc3NDM1MjgwNi45NTksInN1YiI6IjY5YzI3OWE2Y2FiMDNiMmQ2YjdiY2FkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tE86Ks4nI55AEXeE0TTrfV2_3xvKT93kU2cYpwa7l3U'
  }
};

//Inicia variable apiCache
const apiCache = new Map();
const CACHE_TTL = 1000 * 60 * 60; //TTL

// FETCH API
export async function getMovies(url: string, params: string = "", page: number = 1): Promise<MovieResponse> {
  const cacheKey = `${url}-${params}-${page}`;
  // Si la consulta esta en cache Y NO HA CADUCADO, la devuelve directamente
  const cachedItem = apiCache.get(cacheKey);
  if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
    return cachedItem.data;
  }

  // Si no esta en cache la solicita
  const response = await fetch(`https://api.themoviedb.org/3/${url}?language=es-ES${params}&page=${page}`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  const data = await response.json();

  // Guarda en cache la consulta
  apiCache.set(cacheKey, {
    data: data,
    timestamp: Date.now()
  });

  return data
}

// DETALLE PELICULA
export async function getMovieDetails(id: string): Promise<MovieDetails> {
  // Cache
  const cacheKey = `details-${id}`;
  const cachedItem = apiCache.get(cacheKey);
  if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
    return cachedItem.data;
  }

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=es-ES`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  const data = await response.json();

  // Guarda en cache la consulta
  apiCache.set(cacheKey, {
    data: data,
    timestamp: Date.now()
  });

  return data
}

// VIDEOS
export async function getMovieVideos(id: string): Promise<VideoResponse> {
  // Cache
  const cacheKey = `videos-${id}`;
  const cachedItem = apiCache.get(cacheKey);
  if (cachedItem && (Date.now() - cachedItem.timestamp < CACHE_TTL)) {
    return cachedItem.data;
  }

  const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=es-ES`, options);
  
  if (!response.ok) {
    throw new Error('Error al cargar las películas');
  }
  
  const data = await response.json();

  // Guarda en cache la consulta
  apiCache.set(cacheKey, {
    data: data,
    timestamp: Date.now()
  });

  return data
}