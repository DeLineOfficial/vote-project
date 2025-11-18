<script setup lang="ts">

const route = useRoute();
const APIURL = useAPI()
const authStore = useAuthStore();

const postId = route.params.id;

const { data } = await useFetch<PostContent>(APIURL + '/posts/' + postId )

definePageMeta({
    middleware: 'auth'
})
useSeoMeta({
    title: `Редактирование поста - ${data.value?.title}`,
    description: data.value?.content
})


const title = ref(data.value?.title);
const content = ref(data.value?.content);


async function editPost() {
    try {
        const data = await $fetch(APIURL + '/posts/' + postId, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authStore.token}`
            },
            body: {
                title: title.value,
                content: content.value
            }
        })
        navigateTo('/');
    } catch (error) {
        console.error(error)
    }
}

</script>

<template>
    <div class="index__page">
        <div class="create-post">
            <div class="create-post__plus">
                <Icon name="icon:close" />
            </div>
            <div class="create-post__actions">
                <InputField  v-model="title" height="34px" placeholder="Тема поста..."/>
                <TextAreaField v-model="content"  placeholder="Описание поста..."/>

                <ActionButton @click="editPost"  class="create-post__button">Сохранить</ActionButton>
            </div>
        </div>
    </div>
</template>


<style scoped>
.create-post {
    display: flex;
    flex: 1 1 auto;
    position: relative;
    max-width: 692px;
    gap: 8px;
    &::before {
        content: '';
        position: absolute;
        height: 100%;
        width: 3px;
        left: 15px;
        background: var(--color-gray-icon-light);
    }

    & .create-post__plus {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        z-index: 1;
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

    & .create-post__actions {
        display: flex;
        flex-direction: column;
        gap: 16px;
        flex: 1 1 auto;

        & .create-post__button {
            margin: 0 auto;
            width: 140px;
        }
    }
}
</style>