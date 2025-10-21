<script setup lang="ts">

const props = defineProps<{
    totalPages: number | undefined,
    currentPage: number,
}>()

const displayedPages = computed(() => {
    const pages = []

    // Всегда добавляем первую страницу
    pages.push(1)
    if(props.totalPages == undefined) {
        return
    }
    // Определяем диапазон страниц для отображения
    let start = Math.max(2, props.currentPage - 1)
    let end = Math.min(props.totalPages - 1, props.currentPage + 1)

    // Корректируем диапазон для крайних случаев
    if (props.currentPage <= 3) {
        end = Math.min(props.totalPages - 1, 4)
    } else if (props.currentPage >= props.totalPages - 2) {
        start = Math.max(2, props.totalPages - 3)
    }

    // Добавляем троеточие после первой страницы, если нужно
    if (start > 2) {
        pages.push('...')
    }

    // Добавляем страницы в диапазоне
    for (let i = start; i <= end; i++) {
        pages.push(i)
    }

    // Добавляем троеточие перед последней страницей, если нужно
    if (end < props.totalPages - 1) {
        pages.push('...')
    }

    // Добавляем последнюю страницу (если она не первая)
    if (props.totalPages > 1) {
        pages.push(props.totalPages)
    }

    return pages
})


const emits = defineEmits<{
    (e: 'pageChanged', value: number): void;
}>()

const goToPage = (page: any) => {
    if(props.totalPages == undefined) {
        return
    }
    if (page < 1 || page > props.totalPages) return
    emits('pageChanged', page)
}
</script>

<template>

    <div class="pagination">
        <span 
            v-for="page in displayedPages"
            :key="page"
            :class="{'pagination-page': true, 'active': page === currentPage, 'ellipsis': page === '...'}" :disabled="page === '...'"
            @click="goToPage(page)"
        >
            {{ page }}
        </span>
    </div>

</template>

<style scoped>
    .pagination {
        max-width: 692px;
        padding-top: 24px;
        border-top: 1px solid var(--color-light-gray);
        display: flex;
        align-items: center;

        & .pagination-page {
            display: flex;
            font-size: 18px;
            padding: 4px 16px;
            cursor: pointer;
            font-weight: 400;
            color: var(--color-gray-icon);
            border-right: 1px solid var(--color-light-gray);
            &:first-child {
                padding-left: 0;
            }
            &:last-child {
                border-right: none;
                padding-right: 0;
            }
            &.active {
                color: var(--color-gray);
            }
        }
    }
</style>