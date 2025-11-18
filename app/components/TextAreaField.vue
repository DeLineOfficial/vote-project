<script setup lang="ts">
const model = defineModel<string>();
</script>

<template>
    <textarea v-model="model" class="area-field"></textarea>
</template>

<style scoped>
.area-field {
    display: flex;
    width: 100%;
    height: 100%;
    border: none;
    /* border: 1px solid rgba(230, 230, 230, 0.8); */
    padding: 14px;
    outline: none;
    border-radius: 20px;
    font-size: 16px;
    resize: none;
}
</style>