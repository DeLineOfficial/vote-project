<template>
    <div class="main-wrapper">
        <LayoutSidebar />
        <div class="main-content">
            <slot />
        </div>
    </div>
</template>

<style scoped>
.main-wrapper {
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 100vh;
    align-items: flex-start;
}

.main-content {
    display: flex;
    padding: 40px 0;
    height: 100%;
    max-width: 100%;
    width: 100%;
}
</style>