<script setup lang="ts">
const { color = 'primary' } = defineProps<{
    color?: 'primary' | 'ghost'
}>()

const emit = defineEmits<{
  (e: 'click', value: any): void
}>();
</script>

<template>

    <div class="action-button" tabindex="0" :class="color" @keyup.enter="(e) => emit('click', e)" @click="(e) => emit('click', e)">
        <slot />
    </div>

</template>


<style scoped>
.action-button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
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
