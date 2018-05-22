<template>
    <div class="i-row">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "i-row"
    }
</script>

<style scoped>
    .i-row{
        position: relative;
        margin-left: 0;
        margin-right: 0;
        height: auto;
        zoom: 1;
        display: block;
    }
</style>