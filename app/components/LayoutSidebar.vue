<script setup lang="ts">

const authStore = useAuthStore();

</script>

<template>
    <div class="sidebar">
        <div class="sidebar__content">
            <NuxtLink to="/"><Icon name="icon:home"/></NuxtLink>
            <NuxtLink to="/auth" @click="() => {authStore.clearToken()}"><Icon name="icon:account-exit"/></NuxtLink>
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
        > * {
            font-size: 21px;
            display: flex;
            align-items: center;
            color: var(--color-black);
            transition: .3s;
            &::hover {
                color: var(--color-black-hover);
            }
        }
    }
}
</style>