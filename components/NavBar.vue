<template>
    <nav class="">
        <ul class="flex items-center justify-evenly lg:flex-col lg:h-full">
            <li>
                <NuxtLink class="p-5" aria-label="Accueil":to="{name: 'index'}">
                    <Icon class="h-8 w-8" name="ic:baseline-home" />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="p-5" aria-label="Fims" to="">
                    <Icon class="h-8 w-8" name="tabler:movie" />
                </NuxtLink>
            </li>
            <li>
                <NuxtLink class="p-5" aria-label="Séries Télévisés" to="">
                    <Icon class="h-8 w-8" name="mdi:tv-classic" />
                </NuxtLink>
            </li>
            <li>
                <button class="p-5" aria-label="Rechercher">
                    <Icon class="h-8 w-8" name="mdi:search" />
                </button>
            </li>
        </ul>
    </nav>
</template>