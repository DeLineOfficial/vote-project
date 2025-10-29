<script setup lang="ts">

const route = useRoute();
const APIURL = useAPI()

const { data } = await useFetch<PostContent>(APIURL + '/posts/' + route.params.id )

definePageMeta({
    middleware: 'auth'
})

useSeoMeta({
    title: `Редактирование поста - ${data.value?.title}`,
    description: data.value?.content
})

</script>

<template>
    <h1>Edit post {{ data }}</h1>
</template>