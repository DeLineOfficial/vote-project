<script setup lang="ts">
const runtime = useRuntimeConfig();
const APIURL = runtime.public.APIURL;
const postsResponse = await useFetch<GetPosts>(APIURL + '/posts')


const posts = computed(() => {
    return postsResponse.data.value?.posts || [];
})


async function likePost(id: Number) {
    await $fetch(APIURL + '/posts/' + id + '/like', {
        method: 'POST',
    }); 
    await postsResponse.refresh();
}
async function dislikePost(id: Number) {
    await $fetch(APIURL + '/posts/' + id + '/dislike', {
        method: 'POST',
    }); 
    await postsResponse.refresh();
}
</script>

<template>
    <div class="index__page">
        <div class="posts">
            <PostContent v-for="post in posts" :content="post" :key="post.id" @like="(id) => likePost(id)" @dislike="(id) => dislikePost(id)"/>
        </div>
    </div>

</template>
<style scoped>
.index__page {
    display: flex;
    width: 100%;
    flex-direction: column;
}
.posts {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
}
</style>