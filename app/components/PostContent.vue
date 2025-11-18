<script setup lang="ts">

const config = useRuntimeConfig();
const gradeStore = useGradePostStore();
const props = defineProps<{
    content: PostContent
}>();
const emit = defineEmits<{
    'like': [value: Number],
    'dislike': [value: Number],
}>()
const like = ref<Boolean>(false);
const dislike = ref<Boolean>(false);

const datePosted = computed(() => {
    const date = new Date(props.content.updated_at);
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

const graded = computed<any>(() => {
    return gradeStore.isGrade(props.content.id)
})

function gradePost(grade: string){
    if(grade == 'like') {
        emit('like', props.content.id)
    } else {
        emit('dislike', props.content.id)
    }
}



</script>
<template>
    <div class="post">
        <div class="post__header">
            <div class="author">
                <img class="logo" src="https://images.steamusercontent.com/ugc/2392062395208059840/9265AEBEF437F14A23B08037DEF8EB2787EBDB2A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="test">
                <span>Artem, Frontend developer</span>
            </div>
            <span class="date-posted">{{ datePosted }}</span>
        </div>
        <div class="post__content">
            <NuxtLink :to="'/post/' + content.id"><h2>{{ content.title }}</h2></NuxtLink>
            <p>{{ content.content }}</p>
        </div>
        <div class="post-actions">
            <div class="post__actions" :class="{graded: gradeStore.isGrade(content.id)}">
                <div class="action">{{ content.likes }}<Icon :name="graded?.action == 'liked' ? 'icon:like-active' : 'icon:like'" class="like" :class="{'completed': like == true}" @click="gradePost('like')"/></div>
                <div class="action">{{ content.dislikes }}<Icon :name="graded?.action == 'disliked' ? 'icon:dislike-active' : 'icon:dislike'"  class="dislike" :class="{'completed': dislike == true}" @click="gradePost('dislike')"/></div>
            
            </div>
            <div class="actions__state">
                <NuxtLink :to="'/post/edit/' + content.id" class="action__edit">
                    <Icon name="icon:edit"/>
                    <span>Изменить</span>
                </NuxtLink>
            </div>
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
            display: -webkit-box;
            -webkit-line-clamp: 3; /* number of lines to show */
            line-clamp: 3;
            overflow: hidden;
            -webkit-box-orient: vertical;
        }
    }
    
    & .post-actions {
        display: flex;
        margin-top: 10px;
        align-items: center;
        width: 100%;
        & .post__actions {
            display: flex;
            gap: 14px;
            &.graded {
                pointer-events: none;
            }
            & > .action {
                display: flex;
                align-items: center;
                font-size: 14px;
                gap: 6px;
                color: var(--color-gray);
    
                
                & .iconify {
                    cursor: pointer;
                    color: var(--color-gray-icon);
                    font-size: 18px;
                    &.completed {
                        pointer-events: none;
                    }
                }
            }
            
        }
        & .actions__state {
            display: flex;
            gap: 24px;
            margin-left: auto;

            & > .action__edit {
                display: flex;
                align-items: flex-end;
                color: var(--color-gray);
                gap: 4px;
                font-size: 16px;

                & > .iconify {
                    font-size: 20px;
                }
            }
        }
    }

    &.post__selected {
        & .post__content {
            & p {
                display: flex;
                overflow: auto;
            }
        }
        & .actions__state {

        }
    }
}
</style>