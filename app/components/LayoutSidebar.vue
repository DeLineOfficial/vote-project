<script setup lang="ts">

const authStore = useAuthStore();

</script>

<template>
    <div class="sidebar">
        <div class="sidebar__content">
            <NuxtLink to="/"><Icon name="icon:home"/></NuxtLink>

            <div class="sidebar__profile">
                <img class="logo" v-if="authStore.token" src="https://images.steamusercontent.com/ugc/2392062395208059840/9265AEBEF437F14A23B08037DEF8EB2787EBDB2A/?imw=512&amp;imh=512&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true" alt="test"></img>
                <NuxtLink to="/auth" @click="() => {authStore.clearToken()}"><Icon name="icon:account-exit"/></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style scoped >
.sidebar {
    display: flex;
    height: 100%;
    width: 80px;
    min-width: 80px;
    border-right: 1px solid var(--color-light-gray);
    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 40px 0;
        & * {
            font-size: 21px;
            display: flex;
            align-items: center;
            color: var(--color-black);
            transition: .3s;
            &::hover {
                color: var(--color-black-hover);
            }
        }

        & .sidebar__profile {
            display: flex;
            flex-direction: column;
            gap: 32px;

            & img {
                width: 32px;
                height: 32px;
                object-fit: cover;
                object-position: center;
            }
        }
    }
}
</style>