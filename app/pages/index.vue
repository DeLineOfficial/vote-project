<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const gradeStore = useGradePostStore();
const authStore = useAuthStore();
const APIURL = useAPI();

useSeoMeta({
    title: 'Главная',
    description: 'Главная страница с постами',
    ogDescription: 'Главная страница с постами'
})

const query = computed(() => ({
    page: route.query.page ?? 1,
    sort: route.query.sort || 'date',
}))
const postsResponse = await useFetch<GetPosts>(APIURL + '/posts', {
    query,
    key: 'sortable-posts'
})

const posts = computed(() => {
    return postsResponse.data.value?.posts || [];
})
const totalPage = computed(() => {
    return postsResponse.data.value?.total_pages || undefined
})
const currentPage = computed(() => {
    if(Number(route.query.page) > Number(totalPage.value) || route.query.page == undefined) {
        router.replace({ query: { ...route.query, page: 1 } })
        return 1
    } else {
        return Number(route.query.page)
    }
});

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


async function likePost(id: number) {
    await $fetch(APIURL + '/posts/' + id + '/like', {
        method: 'POST',
    });
    await postsResponse.refresh();
    gradeStore.likePost(id);
}
async function dislikePost(id: number) {
    await $fetch(APIURL + '/posts/' + id + '/dislike', {
        method: 'POST',
    });
    await postsResponse.refresh();
    gradeStore.dislikePost(id);
}

function updateFilter(option: string) {
    router.replace({ query: { ...route.query, sort: option } })
}

function paginatePage(page: number) {
    router.replace({ query: { ...route.query, page: page } })
}
</script>

<template>
    <div class="index__page">
        <NuxtLink to="post/create" v-if="authStore.token" class="create-post">
            <div class="create-post__plus">
                <Icon name="icon:close"/>
            </div>
            <span>Добавить новой пост для голосования</span>
        </NuxtLink>
        <SortPosts :filter="filterOption" :active="activeFilter" @update="(val) => updateFilter(val)"/>
        <div class="posts">
            <PostContent v-for="post in posts" :content="post" :key="post.id" @like="(id) => likePost(Number(id))" @dislike="(id) => dislikePost(Number(id))"/>
        </div>
        <PaginationList :current-page="currentPage" :total-pages="totalPage" @page-changed="(e) => paginatePage(e)"/>
    </div>

</template>
<style scoped>
.index__page {

    & .posts {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        overflow: auto;
    }


    & .create-post {
        display: flex;
        align-items: center;
        width: fit-content;
        margin-bottom: 28px;
        gap: 8px;

        & .create-post__plus {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 34px;
            height: 34px;
            border-radius: 50%;
            transition: .2s;
            background: var(--color-gray-icon-light);
            
            & .iconify {
                color: var(--color-black);
                transform: rotate(45deg);
            }
        }
        
        &:hover {
            & .create-post__plus {
                background: var(--color-light-gray);
            }
        }
        & span {
            color: var(--color-black);
            font-weight: 300;
        }
    }
}

</style>