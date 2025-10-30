<script setup lang="ts">

const model = defineModel()
const { type = 'text', height = '41px' } = defineProps<{
    type?: string,
    placeholder?: string,
    height?: string,
}>()

</script>
<template>
    <div class="input-field__container">
        <input v-model="model" :type="type" class="input-field" :class="{'icon': $slots.icon}" :placeholder="placeholder"/>
        <div v-if="$slots.icon" class="iconify">
            <slot name="icon"/>
        </div>
    </div>
</template>


<style scoped>
.input-field__container {
    display: flex;
    width: 100%;
    height: v-bind(height);
    position: relative;
    align-items: center;
    & .input-field {
        display: flex;
        width: 100%;
        height: 100%;
        border-radius: 20px;
        border: 1px solid rgba(230, 230, 230, 0.8);
        outline: none;
        padding: 0 14px;
        font-size: var(--color-black);
        font-size: 16px;
        &.icon {
            padding-left: 40px;
        }
        &:focus {
            border: 1px solid var(--color-light-gray);
        }
    }
    & .iconify {
        position: absolute;
        left: 12px;
        font-size: 20px;
        display: flex;
        align-items: center;
    }
}
</style>