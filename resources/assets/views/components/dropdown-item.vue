<template>
    <li class="dropdown-item" @click="handleClick"><slot></slot></li>
</template>

<script>
    export default {
        name: "dropdown-item",
        methods: {
            handleClick(el) {
                const hasChildren = this.$parent && this.$parent.$options.name === 'dropdown';
                if (hasChildren) {
                    this.$parent.$emit('change', el);
                }
                this.$parent.handleClick();
            }
        }
    }
</script>

<style scoped>
    .dropdown-item{
        margin: 0;
        line-height: normal;
        padding: 7px 16px;
        clear: both;
        color: #495060;
        font-size: 12px!important;
        white-space: nowrap;
        list-style: none;
        cursor: pointer;
        transition: background .2s ease-in-out;
        text-align: center;
    }
</style>