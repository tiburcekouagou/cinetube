<script setup lang="ts">
import type { CommonResult, MediaType, MovieResult, TMDBResponse, TvResult } from '~/types';

const { data: trendingTvShows } = await fetchData('tv');
const { data: trendingMovies } = await fetchData('movie')
// feature a random item from movies or tv
let featured = ref<any>(null)

const items = [
    ...(trendingMovies.value as TMDBResponse).results,
    ...(trendingTvShows.value as TMDBResponse).results
]

const randomItem = items[Math.floor(Math.random() * items.length)];
const media = randomItem.media_type === 'movie' ? 'movie' : 'tv';

if (media === 'movie') {
    featured.value = await useFetch('/api/getMovie', {
        method: 'post',
        body: { id: randomItem.id }
    })
} else {
    featured.value = await useFetch('/api/getMovie', {
        method: 'post',
        body: { id: randomItem.id }
    })
}

async function fetchData(media: MediaType) {
    return await useFetch('/api/getTrending', {
        method: 'post',
        body: { media, page: 1 }
    });
}
</script>
<template>
    <div class="text-3xl underline">Netflix</div>
    <pre>{{ featured }}</pre>
</template>