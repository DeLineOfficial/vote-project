<script setup lang="ts">
const runtime = useRuntimeConfig();
const APIURL = runtime.public.APIURL;
const route = useRoute();
const router = useRouter();

const query = computed(() => ({
    page: route.query.page ?? 1,
    page_size: route.query.page_size ?? 10,
    sort: route.query.sort || 'date',
}))
const postsResponse = await useFetch<GetPosts>(APIURL + '/posts', {
    query,
    key: 'sortable-posts'
})


const posts = computed(() => {
    return postsResponse.data.value?.posts || [];
})

const filterOption = ref([
    {
        label: 'По дате',
        value: 'date'
    },
    {
        label: 'По рейтингу',
        value: 'rating'
    }
])

const activeFilter = ref(route.query.sort?.toString() || 'date')

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

function updateFilter(option: string) {
    router.replace({ query: { ...route.query, sort: option } })
}
</script>

<template>
    <div class="index__page">
        <SortPosts :filter="filterOption" :active="activeFilter" @update="(val) => updateFilter(val)"/>
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

    & .posts {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
}

</style>