<script setup lang="ts">
const content = ref<PostContent>({
    author: 'UserProfile',
    logo: 'https://images.steamusercontent.com/ugc/2392062395208059840/9265AEBEF437F14A23B08037DEF8EB2787EBDB2A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
    content: "Попробовать добавить в приложение функцию голосования, которая позволит определить, какая фича более полезна, а какая нет. После добавления поста появляется...",
    title: 'Добавить функцию голосования',
    date: new Date(),
    likes: 10,
    dislikes: 1,
})

</script>

<template>
    <div class="index__page">
        <div class="posts">
            <PostContent :content="content"/>
            <PostContent :content="content"/>
            <PostContent :content="content"/>
            <PostContent :content="content"/>
            <PostContent :content="content"/>
            <PostContent :content="content"/>
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