<script lang="ts" setup>

 
interface FilterOption {
    label: string,
    value: string,
}

const props = defineProps<{
    active: string,
    filter: FilterOption[],
}>();

const activeOption = ref(props.active)

const emits = defineEmits<{
    (e: 'update', value: string) : void
}>();

function changeFilter(value: string) {
    activeOption.value = value;
    emits('update', value)
}

</script>

<template>
    <div class="sortable">
        <div class="sortable__element" @click="changeFilter(option.value)" :class="{active: activeOption == option.value}" v-for="option in filter" :key="option.value">
            {{ option.label }}
        </div>
    </div>
</template>

<style scoped>
.sortable {
    display: flex;
    align-items: center;
    gap: 42px;
    margin-bottom: 16px;

    & .sortable__element {
        font-size: 16px;
        cursor: pointer;
        font-weight: 400;
        color: var(--color-gray);
        &.active {
            pointer-events: none;
            font-weight: 300;
            color: var(--color-gray-disabled);
        }
    }
}
</style>