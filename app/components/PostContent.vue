<script setup lang="ts">

const props = defineProps<{
    content: PostContent
}>();
const like = ref<Boolean>(false);
const dislike = ref<Boolean>(false);

const datePosted = computed(() => {
    const date = props.content.date
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) {
        return 'сегодня';
    } else if (diffDays === 1) {
        return 'вчера';
    } else if (diffDays >= 2 && diffDays <= 4) {
        return `${diffDays} дня назад`;
    } else if (diffDays >= 5 && diffDays <= 7) {
        return `${diffDays} дней назад`;
    } else {
        return `Больше недели назад`;
    }
    
})

function gradePost(grade: string){
    switch(grade) {
        case 'like':
            dislike.value = false;
            if(like.value == true) {
                like.value = false
            } else {
                like.value = true;
            }
            break
        case 'dislike':
            like.value = false;
            if(dislike.value == true) {
                dislike.value = false
            } else {
                dislike.value = true;
            }
            break
    }
}
</script>
<template>
    <div class="post">
        <div class="post__header">
            <div class="author">
                <img class="logo" :src="content.logo" alt="test">
                <span>{{ content.author }}</span>
            </div>
            <span class="date-posted">{{ datePosted }}</span>
        </div>
        <div class="post__content">
            <h2>{{ content.title }}</h2>
            <p>{{ content.content }}</p>
        </div>
        <div class="post__actions">
            <div class="action">{{ content.likes }}<Icon :name="like ? 'icon:like-active' : 'icon:like'" class="like" @click="gradePost('like')"/></div>
            <div class="action">{{ content.dislikes }}<Icon :name="dislike ? 'icon:dislike-active' : 'icon:dislike'" class="dislike" @click="gradePost('dislike')"/></div>
        </div>
    </div>
</template>

<style scoped>
.post {
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 36px 0;
    max-width: 692px;
    width: 100%;
    border-top: 1px solid var(--color-light-gray);

    &__header {
        display: flex;
        align-items: center;
        gap: 18px;

        & .author {
            display: flex;
            gap: 8px;
            align-items: center;

            & .logo {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                overflow: hidden;
                object-fit: cover;
                object-position: center;
            }

            & span {
                font-size: 14px;
                font-weight: 300;
            }
        }
        & .date-posted {
            color: var(--color-gray-disabled);
            font-size: 14px;
            font-weight: 300;
        }
    }
    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 14px;

        & h2 {
            font-size: 22px;
            font-weight: 400;
            color: var(--color-black);
        }
        & p {
            font-size: 16px;
            line-height: 150%;
            margin-top: 8px;
            color: var(--color-gray);
            font-weight: 300;   
        }
    }
    &__actions {
        display: flex;
        margin-top: 10px;
        align-items: center;
        gap: 14px;

        & > .action {
            display: flex;
            align-items: center;
            font-size: 14px;
            gap: 6px;
            color: var(--color-gray);

            & .iconify {
                color: var(--color-gray-icon);
                font-size: 18px;
                cursor: pointer;
            }
        }
    }
}
</style>