<script setup lang="ts">
const { color = 'primary' } = defineProps<{
    color?: 'primary' | 'ghost'
}>()
</script>

<template>

    <button class="action-button" :class="color">
        <slot />
    </button>

</template>


<style scoped>
.action-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    font-size: 18px;
    transition: .3s;
    padding: 0 16px;
    height: 41px;
    outline: none;
    border: none;
    &.primary {
        background: var(--color-black);
        color: var(--color-white);
        &:hover {
            background: var(--color-black-hover);
        }
    }
    &.ghost {
        background: var(--color-black);
        color: var(--color-white);
        &:hover {
            background: var(--color-black-hovxer);
        }
    }
}

</style>
