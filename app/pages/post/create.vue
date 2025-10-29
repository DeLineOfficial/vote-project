<script setup lang="ts">

definePageMeta({
    middleware: 'auth'
})

useSeoMeta({
    title: 'Создание поста',
    description: 'Создание поста для голосования',
    ogDescription: 'Создание поста для голосования'
})
</script>

<template>
    <h1>Create post</h1>
</template>