export interface TMDBResponse {
    page:          number;
    results:       CommonResult[];
    total_pages:   number;
    total_results: number;
}

export interface CommonResult {
    backdrop_path: string;
    id: number;
    overview: string;
    poster_path: string;
    media_type: MediaType;
    adult: boolean;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    vote_average: number;
    vote_count: number;
}

export interface TvResult extends CommonResult {
    original_name: string;
    name: string;
    first_air_date: Date;
    origin_country: string[];
}

export interface MovieResult extends CommonResult {
    original_title: string;
    title: string;
    release_date: Date;
    video: boolean;
}


export type MediaType = "tv" | "movie";