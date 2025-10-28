<script lang="ts" setup>
const route = useRoute();
const postId = route.path.split('/').splice(2)[0];
const APIURL = useAPI()
const { data, refresh } = await useFetch<PostContent>(APIURL + '/posts/' + postId )

const currentPost = computed(() => {
    return data.value
})

async function likePost(id: Number) {
    await $fetch(APIURL + '/posts/' + id + '/like', {
        method: 'POST',
    }); 
    await refresh();
}
async function dislikePost(id: Number) {
    await $fetch(APIURL + '/posts/' + id + '/dislike', {
        method: 'POST',
    }); 
    await refresh();
}

</script>


<template>
    <div class="post-page">
        <PostContent v-if="currentPost" class="post__selected" :content="currentPost" @like="(id) => likePost(id)" @dislike="(id) => dislikePost(id)"/>
    </div>
</template>

<style scoped>
.post-page {
    display: flex;
    width: 100%;
    margin-left: 132px;
    flex-direction: column;
}
</style>