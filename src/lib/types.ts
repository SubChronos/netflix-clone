//Declara los tipos de las peliculas
export interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

// Define la estructura de la respuesta completa de la API
export interface MovieResponse {
  page: number;
  results: Movie[]; // Aquí le decimos que "results" es un array de películas
  total_pages: number;
  total_results: number;
}

// MovieDetails
export interface MovieResponse {
  page: number;
  results: Movie[]; // Aquí le decimos que "results" es un array de películas
  total_pages: number;
  total_results: number;
}



//Detales de pelicula
export interface Genre {
  id: number;
  name: string;
}
export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}
export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}
export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
export interface Collection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

// Interfaz principal para el detalle de la película
export interface MovieDetails {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: Collection | null; // Puede ser null o un objeto de colección
  budget: number;
  genres: Genre[]; // Array de objetos, no solo los IDs
  homepage: string;
  id: number;
  imdb_id: string;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number; // Duración en minutos
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


// Videos
export interface VideoResponse {
  id: number;
  results: Video[];
}
export interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}