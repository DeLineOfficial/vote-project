<script lang="ts" setup>
import type { NuxtError } from '#app';

const {} = defineProps<{
    error: NuxtError;
}>();


</script>

<template>
    <NuxtLayout>
        <div class="error">
            <div class="error-content">
                <h1>{{ error.statusCode }}</h1>
                <p v-if="error.statusCode == 404">Страница не найдена, вернитесь на главную страницу</p>
                <p v-else>{{ error.statusMessage }}</p>
    
                <ActionButton class="error-btn" @click="navigateTo('/')">На главную</ActionButton>
            </div>
    
    
        </div>
    </NuxtLayout>
</template>

<style scoped>
.error {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.error-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: var(--color-gray);
}
h1 {
    font-size: 120px;
    font-weight: 500;
}
p {
    font-size: 16px;
    font-weight: 300;
}
.error-btn {
    margin-top: 48px;
}
</style>