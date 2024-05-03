<template>
    <div class="min-h-screen flex flex-col-reverse lg:flex-row">
        <header class="min-w-16 min-h-16 lg:h-screen">
            <!-- Nav Bar -->
            <NavBar class="lg:h-full" />
            <!--/ Nav Bar -->
        </header>
        <div class="flex-1">
            <main class="">
            <slot />
        </main>
        <footer class="">
            Footer
        </footer>
        </div>
    </div>
</template>