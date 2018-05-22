<template>
    <div class="dropdown" v-clickoutside="onClickoutside">
        <a href="javascript:void(0)" class="dropdown-rel" ref="reference" @click="handleClick"><slot></slot></a>
        <transition name="transition-drop">
            <div :class="dropdownCls" ref="drop" v-show="currentVisible" :placement="placement" :data-transfer="transfer" v-transfer-dom>
                <ul>
                    <slot name="list"></slot>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
    import clickoutside from '@/js/directives/clickoutside'
    import TransferDom from '@/js/directives/transfer-dom'

    export default {
        name: "dropdown",
        directives: { clickoutside, TransferDom },
        props:{
            transfer: {
                type: Boolean,
                default: false
            },
            placement: {
                type: String,
                default: 'bottom'
            }
        },
        computed: {
            transition() {
                return ['bottom-start', 'bottom', 'bottom-end'].indexOf(this.placement) > -1 ? 'slide-up' : 'fade';
            },
            dropdownCls(){
                return {
                    ['dropdown-ref']: true,
                    ['dropdown-transfer']: this.transfer
                };
            }
        },
        data(){
            return {
                currentVisible: false
            }
        },
        methods: {
            handleClick () {
                this.currentVisible = !this.currentVisible;
            },
            onClickoutside (e) {
                this.currentVisible = false
            },
        }
    }
</script>

<style scoped>
    .dropdown{
        display: inline-block;
        overflow: visible;
        max-height: none;
    }
    .dropdown-ref{
        width: inherit;
        max-height: 200px;
        overflow: auto;
        margin: 5px 0;
        padding: 5px 0;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 4px;
        box-shadow: 0 1px 6px rgba(0,0,0,.2);
        position: absolute;
        z-index: 900;
        overflow: visible;
        max-height: none;
    }
    .dropdown-ref > ul{
        min-width: 100px;
    }
    .dropdown-transfer{
        width:auto;
        top:10px;
        left: 10px;
        position: fixed;
    }
</style>