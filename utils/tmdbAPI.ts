import { TMDB_API_PARAMS, TMDB_API_URL } from "~/config/tmdbAPI";
import type { MediaType, MovieResult, TvResult } from "~/types";

function fetchTMDB(url: string, params: Record<string, any>) {
    return $fetch(url, {
        baseURL: TMDB_API_URL,
        params: {...TMDB_API_PARAMS, ...params}
    })
}

function getTrending(media: MediaType, page: number = 1) {
    return fetchTMDB(`trending/${media}/week`, {page})
}

function getMovie(id: number): Promise<MovieResult | TvResult> {
    return fetchTMDB(`movie/${id}`, {
        append_to_response: 'videos,credits,images,external_ids,release_dates',
        include_image_language: 'fr'
    }) as Promise<MovieResult | TvResult>
}

function getTv(id: number): Promise<MovieResult | TvResult> {
    return fetchTMDB(`tv/${id}`, {
        append_to_response: 'videos,credits,images,external_ids,release_dates',
        include_image_language: 'fr'
    }) as Promise<MovieResult | TvResult>
}

export {
    getTrending,
    getMovie,
    getTv,
}