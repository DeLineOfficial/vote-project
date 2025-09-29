<template>
    <div class="main-wrapper">
    <LayoutSidebar/>
    <div class="main-content">
        <slot/>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: flex-start;
}
.main-content {
    display: flex;
    padding: 40px 24px;
    flex: 1 1 auto;
}
</style>